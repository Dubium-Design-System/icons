import { readdir, readFile } from "node:fs/promises"
import { join, parse } from "node:path"

import { optimize } from "svgo"
import { defineConfig, type Plugin } from "vite"

/**
 * Директория с исходными SVG-иконками.
 */
const INPUT_DIR = "icons/source"

/**
 * Директория для оптимизированных SVG-иконок.
 */
const OUTPUT_DIR = "icons/optimized"

/**
 * Преобразует имя файла иконки в PascalCase.
 *
 * @remarks
 * Убирает суффикс `Icon`, разделяет camelCase и слова с разделителями,
 * а к именам, начинающимся с цифры, добавляет префикс `Icon`.
 *
 * @param value - Исходное имя файла
 * @returns Имя в PascalCase
 */
function toPascalCase(value: string): string {
	const normalized = value
		.replace(/Icon$/i, "")
		.replace(/([a-z0-9])([A-Z])/g, "$1 $2")
		.split(/[-_\s]+/)
		.filter(Boolean)
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join("")

	return /^\d/u.test(normalized) ? `Icon${normalized}` : normalized
}

/**
 * Рекурсивно собирает пути всех SVG-файлов в директории.
 *
 * @param dir - Путь к директории
 * @returns Отсортированный список путей к SVG-файлам
 */
async function getSvgFiles(dir: string): Promise<string[]> {
	const entries = await readdir(dir, { withFileTypes: true })

	const files = await Promise.all(
		entries.map(async (entry) => {
			const path = join(dir, entry.name)

			if (entry.isDirectory()) {
				return getSvgFiles(path)
			}

			if (entry.isFile() && entry.name.toLowerCase().endsWith(".svg")) {
				return [path]
			}

			return []
		}),
	)

	return files.flat().sort((a, b) => a.localeCompare(b))
}

/**
 * Находит в SVG ссылки на встроенные или внешние изображения.
 *
 * @param svg - Содержимое SVG-файла
 * @returns Список предупреждений об обнаруженных изображениях
 */
function detectEmbeddedImages(svg: string): string[] {
	const warnings: string[] = []
	const imagePattern = /<(?:image|img)\b[^>]*(?:href|xlink:href|src)\s*=\s*["']([^"']+)["'][^>]*>/giu

	for (const match of svg.matchAll(imagePattern)) {
		const source = match[1]

		if (/^data:image\/svg\+xml/iu.test(source)) {
			warnings.push("встроенное SVG-изображение")
		} else if (/^data:image\//iu.test(source)) {
			warnings.push("встроенное растровое изображение")
		} else if (/^(?:https?:)?\/\//iu.test(source)) {
			warnings.push("внешнее изображение")
		} else {
			warnings.push("ссылка на изображение")
		}
	}

	return warnings
}

/**
 * Генерирует уникальное имя, сравнивая финальные имена case-insensitive.
 * Это важно для Windows/WSL на /mnt/c, где файловая система обычно
 * регистронезависимая.
 */
function createUniqueFileName(
	originalName: string,
	usedFileNames: Set<string>,
	occurrences: Map<string, number>,
): string {
	const baseName = toPascalCase(originalName)
	const occurrenceKey = baseName.toLowerCase()

	let occurrence = (occurrences.get(occurrenceKey) ?? 0) + 1
	let fileName = `${baseName}${occurrence === 1 ? "" : `_${occurrence}`}Icon.svg`

	while (usedFileNames.has(fileName.toLowerCase())) {
		occurrence += 1
		fileName = `${baseName}_${occurrence}Icon.svg`
	}

	occurrences.set(occurrenceKey, occurrence)
	usedFileNames.add(fileName.toLowerCase())

	return fileName
}

/**
 * Vite-плагин, оптимизирующий исходные SVG через SVGO.
 *
 * @remarks
 * Плагин сканирует `icons/source`, предупреждает о встроенных/внешних
 * изображениях, оптимизирует каждый файл и эмитит результат в `icons/optimized`
 * с уникальными именами в PascalCase.
 *
 * @returns Объект Vite-плагина
 */
function svgBuildPlugin(): Plugin {
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
			const usedFileNames = new Set<string>()

			for (const file of files) {
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

				const fileName = createUniqueFileName(parse(file).name, usedFileNames, occurrences)

				this.emitFile({
					type: "asset",
					fileName,
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
		rolldownOptions: {
			input: "virtual:svg-build",
		},
	},
})
