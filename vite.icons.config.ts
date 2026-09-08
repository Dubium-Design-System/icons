import { readdir, readFile } from "node:fs/promises"
import { join, parse, relative, sep } from "node:path"

import { optimize } from "svgo"
import { defineConfig, type Plugin } from "vite"

/**
 * Корневая директория исходных SVG-иконок.
 *
 * Поддерживаются только:
 *
 * - `colors`;
 * - `filled`;
 * - `outline`.
 */
const INPUT_DIR = "icons/source"

/**
 * Директория оптимизированных SVG.
 *
 * Структура source-категорий сохраняется:
 *
 * ```text
 * icons/optimized/colors
 * icons/optimized/filled
 * icons/optimized/outline
 * ```
 */
const OUTPUT_DIR = "icons/optimized"

/**
 * Варианты исходных иконок и соответствующие
 * суффиксы публичного имени.
 *
 * `colors` не получает дополнительного суффикса.
 */
const SOURCE_VARIANTS = {
	colors: "",
	filled: "Filled",
	outline: "Outline",
} as const

type TSourceKind = keyof typeof SOURCE_VARIANTS

/**
 * Суффикс `Icon`, который может уже присутствовать
 * в исходном имени файла.
 */
const ICON_SUFFIX_REGEX = /Icon$/iu

/**
 * Граница между camelCase / PascalCase словами.
 */
const CAMEL_CASE_BOUNDARY_REGEX = /([a-z0-9])([A-Z])/g

/**
 * Разделители слов в исходном имени файла.
 */
const WORD_SEPARATOR_REGEX = /[-_\s]+/

/**
 * Проверяет расширение SVG.
 */
const SVG_FILE_REGEX = /\.svg$/iu

/**
 * Находит встроенные или внешние изображения внутри SVG.
 */
const IMAGE_REFERENCE_REGEX = /<(?:image|img)\b[^>]*(?:href|xlink:href|src)\s*=\s*["']([^"']+)["'][^>]*>/giu

/**
 * Проверяет SVG data URL.
 */
const SVG_DATA_URL_REGEX = /^data:image\/svg\+xml/iu

/**
 * Проверяет image data URL.
 */
const IMAGE_DATA_URL_REGEX = /^data:image\//iu

/**
 * Проверяет внешний HTTP(S) URL.
 */
const EXTERNAL_URL_REGEX = /^(?:https?:)?\/\//iu

/**
 * Проверяет, является ли строка допустимой
 * source-категорией.
 *
 * @param value Имя директории.
 * @returns `true`, если категория поддерживается.
 */
const isSourceKind = (value: string): value is TSourceKind => {
	return Object.hasOwn(SOURCE_VARIANTS, value)
}

/**
 * Определяет source-категорию SVG по его пути.
 *
 * @example
 * ```text
 * icons/source/colors/logo.svg
 * -> colors
 *
 * icons/source/filled/user.svg
 * -> filled
 *
 * icons/source/outline/user.svg
 * -> outline
 * ```
 *
 * @param filePath Путь исходного SVG.
 * @returns Source-категория.
 *
 * @throws
 * Если SVG находится вне `colors`, `filled` или `outline`.
 */
const getSourceKind = (filePath: string): TSourceKind => {
	const sourceRelativePath = relative(INPUT_DIR, filePath)

	const [sourceKind] = sourceRelativePath.split(sep)

	if (!sourceKind || !isSourceKind(sourceKind)) {
		throw new Error(
			`SVG "${filePath}" должен находиться в одной из директорий: ` + Object.keys(SOURCE_VARIANTS).join(", "),
		)
	}

	return sourceKind
}

/**
 * Преобразует имя SVG в PascalCase-подобное
 * публичное имя.
 *
 * Числовое начало сохраняется без изменений.
 *
 * Ограничения JavaScript identifier применяются позже,
 * при генерации React-компонента.
 *
 * @example
 * ```text
 * user
 * -> User
 *
 * 123
 * -> 123
 *
 * 2fa
 * -> 2fa
 *
 * 3d-rotate
 * -> 3dRotate
 *
 * 360-view
 * -> 360View
 * ```
 *
 * @param value Исходное имя без расширения.
 * @returns Нормализованное имя.
 */
const toPascalCase = (value: string): string => {
	return value
		.replace(ICON_SUFFIX_REGEX, "")
		.replace(CAMEL_CASE_BOUNDARY_REGEX, "$1 $2")
		.split(WORD_SEPARATOR_REGEX)
		.filter(Boolean)
		.map((part) => {
			return part.charAt(0).toUpperCase() + part.slice(1)
		})
		.join("")
}

/**
 * Рекурсивно собирает SVG-файлы.
 *
 * @param directory Директория для обхода.
 * @returns Отсортированный список SVG.
 */
const getSvgFiles = async (directory: string): Promise<string[]> => {
	const entries = await readdir(directory, {
		withFileTypes: true,
	})

	const files = await Promise.all(
		entries.map(async (entry) => {
			const path = join(directory, entry.name)

			if (entry.isDirectory()) {
				return getSvgFiles(path)
			}

			if (entry.isFile() && SVG_FILE_REGEX.test(entry.name)) {
				return [path]
			}

			return []
		}),
	)

	return files.flat().sort((a, b) => a.localeCompare(b))
}

/**
 * Находит ссылки на изображения внутри SVG.
 *
 * @param svg SVG-разметка.
 * @returns Список предупреждений.
 */
const detectEmbeddedImages = (svg: string): string[] => {
	const warnings: string[] = []

	for (const match of svg.matchAll(IMAGE_REFERENCE_REGEX)) {
		const source = match[1]

		if (SVG_DATA_URL_REGEX.test(source)) {
			warnings.push("встроенное SVG-изображение")
		} else if (IMAGE_DATA_URL_REGEX.test(source)) {
			warnings.push("встроенное растровое изображение")
		} else if (EXTERNAL_URL_REGEX.test(source)) {
			warnings.push("внешнее изображение")
		} else {
			warnings.push("ссылка на изображение")
		}
	}

	return warnings
}

/**
 * Создаёт уникальное имя optimized SVG.
 *
 * Source-категория определяет суффикс:
 *
 * ```text
 * colors  -> *Icon.svg
 * filled  -> *FilledIcon.svg
 * outline -> *OutlineIcon.svg
 * ```
 *
 * @example
 * ```text
 * colors/user.svg
 * -> UserIcon.svg
 *
 * filled/user.svg
 * -> UserFilledIcon.svg
 *
 * outline/user.svg
 * -> UserOutlineIcon.svg
 *
 * filled/123.svg
 * -> 123FilledIcon.svg
 * ```
 *
 * @param originalName Исходное имя без расширения.
 * @param sourceKind Source-категория.
 * @param usedFileNames Уже использованные имена.
 * @param occurrences Счётчик совпадений имён.
 * @returns Уникальное имя SVG.
 */
const createUniqueFileName = (
	originalName: string,
	sourceKind: TSourceKind,
	usedFileNames: Set<string>,
	occurrences: Map<string, number>,
): string => {
	const baseName = toPascalCase(originalName)

	if (!baseName) {
		throw new Error(`Не удалось сформировать имя иконки из "${originalName}"`)
	}

	const variantSuffix = SOURCE_VARIANTS[sourceKind]

	const normalizedName = `${baseName}${variantSuffix}`

	const occurrenceKey = normalizedName.toLowerCase()

	let occurrence = (occurrences.get(occurrenceKey) ?? 0) + 1

	const createFileName = (index: number): string => {
		const duplicateSuffix = index === 1 ? "" : `_${index}`

		return `${baseName}${duplicateSuffix}${variantSuffix}Icon.svg`
	}

	let fileName = createFileName(occurrence)

	while (usedFileNames.has(fileName.toLowerCase())) {
		occurrence += 1

		fileName = createFileName(occurrence)
	}

	occurrences.set(occurrenceKey, occurrence)

	usedFileNames.add(fileName.toLowerCase())

	return fileName
}

/**
 * Vite-плагин подготовки SVG.
 *
 * Плагин:
 *
 * 1. читает SVG из `colors`, `filled`, `outline`;
 * 2. определяет source-категорию по директории;
 * 3. оптимизирует SVG через SVGO;
 * 4. устанавливает width/height в `100%`;
 * 5. добавляет `Filled` или `Outline` в имя;
 * 6. сохраняет source-категорию в `icons/optimized`;
 * 7. полностью очищает предыдущий optimized build.
 *
 * @returns Vite plugin.
 */
const svgBuildPlugin = (): Plugin => {
	return {
		name: "svg-build",

		resolveId(id) {
			if (id === "virtual:svg-build") {
				return "\0virtual:svg-build"
			}
		},

		load(id) {
			if (id === "\0virtual:svg-build") {
				return "export {}"
			}
		},

		async buildStart() {
			const files = await getSvgFiles(INPUT_DIR)

			const occurrences = new Map<string, number>()

			const usedFileNamesBySource = new Map<TSourceKind, Set<string>>()

			for (const sourceKind of Object.keys(SOURCE_VARIANTS) as TSourceKind[]) {
				usedFileNamesBySource.set(sourceKind, new Set())
			}

			for (const file of files) {
				const sourceKind = getSourceKind(file)

				const source = await readFile(file, "utf-8")

				for (const warning of detectEmbeddedImages(source)) {
					this.warn(`[svg-build] ${file}: ${warning}`)
				}

				const result = optimize(source, {
					path: file,
					multipass: true,
					plugins: [
						{
							name: "preset-default",
							params: {
								overrides: {
									cleanupNumericValues: {
										floatPrecision: 3,
									},
									convertPathData: {
										floatPrecision: 3,
									},
									cleanupIds: {
										minify: true,
										remove: true,
									},
								},
							},
						},
						{
							name: "setSvgDimensions",
							fn: () => ({
								element: {
									enter: (node, parentNode) => {
										if (node.name === "svg" && parentNode.type === "root") {
											node.attributes.width = "100%"

											node.attributes.height = "100%"
										}
									},
								},
							}),
						},
					],
				})

				const usedFileNames = usedFileNamesBySource.get(sourceKind)

				if (!usedFileNames) {
					throw new Error(`Не удалось получить registry для source "${sourceKind}"`)
				}

				const fileName = createUniqueFileName(parse(file).name, sourceKind, usedFileNames, occurrences)

				this.emitFile({
					type: "asset",

					/**
					 * Сохраняем source-категорию.
					 *
					 * Это позволяет sync точно определить,
					 * нужно ли сохранять исходные цвета.
					 */
					fileName: `${sourceKind}/${fileName}`,

					source: result.data,
				})
			}
		},

		generateBundle(_, bundle) {
			for (const [fileName, item] of Object.entries(bundle)) {
				if (item.type === "chunk") {
					delete bundle[fileName]
				}
			}
		},
	}
}

export default defineConfig({
	plugins: [svgBuildPlugin()],

	build: {
		outDir: OUTPUT_DIR,
		emptyOutDir: true,
		copyPublicDir: false,

		rollupOptions: {
			input: "virtual:svg-build",
		},
	},
})
