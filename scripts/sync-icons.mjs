import { spawn } from "node:child_process"
import { readdir, readFile, rm, writeFile } from "node:fs/promises"
import { basename, join, relative, sep } from "node:path"
import { fileURLToPath } from "node:url"

/**
 * Корневая директория проекта.
 */
const rootDir = fileURLToPath(new URL("../", import.meta.url))

/**
 * Каталог с оптимизированными SVG-файлами — источник для генерации компонентов.
 */
const optimizedDir = fileURLToPath(new URL("../icons/optimized/", import.meta.url))

/**
 * Каталог, в который записываются сгенерированные компоненты иконок.
 */
const collectionDir = fileURLToPath(new URL("../src/icons/collection/", import.meta.url))

/**
 * Путь к индексному файлу коллекции иконок.
 */
const collectionIndex = fileURLToPath(new URL("../src/icons/collection/index.ts", import.meta.url))

/**
 * Путь к Vite-реестру иконок по умолчанию.
 */
const viteRegistry = fileURLToPath(new URL("../src/icons/vite/icon/Icon.registry.ts", import.meta.url))

/**
 * Значение первичного цвета по умолчанию для пропа `color`.
 */
const PRIMARY_COLOR_DEFAULT = "var(--icon-color, currentColor)"

/**
 * Значение вторичного цвета по умолчанию для пропа `secondaryColor`.
 */
const SECONDARY_COLOR_DEFAULT = "var(--icon-secondary-color, currentColor)"

/**
 * Соответствие SVG-атрибутов их JSX-представлениям.
 */
const SVG_ATTRIBUTE_TO_JSX = new Map([
	["clip-path", "clipPath"],
	["fill-opacity", "fillOpacity"],
	["gradientUnits", "gradientUnits"],
	["stop-color", "stopColor"],
	["stroke-linecap", "strokeLinecap"],
	["stroke-linejoin", "strokeLinejoin"],
	["stroke-opacity", "strokeOpacity"],
	["stroke-width", "strokeWidth"],
])

/**
 * Запускает внешнюю команду в корневой директории проекта и ожидает её завершения.
 *
 * @param command - Запускаемая команда
 * @param args - Аргументы команды
 * @returns Промис, который разрешается при успешном завершении команды
 * @throws
 * Отклоняет промис, если команду не удалось запустить или она завершилась с ненулевым кодом.
 */
const run = (command, args) =>
	new Promise((resolve, reject) => {
		const child = spawn(command, args, {
			cwd: rootDir,
			stdio: "inherit",
			shell: process.platform === "win32",
		})

		child.once("error", reject)

		child.once("exit", (code) => {
			if (code === 0) {
				resolve()
				return
			}

			reject(new Error(`Команда "${command} ${args.join(" ")}" завершилась с кодом ${code}`))
		})
	})

/**
 * Рекурсивно обходит директорию и возвращает пути файлов, удовлетворяющих предикату.
 *
 * @param directory - Абсолютный путь к обходимой директории
 * @param predicate - Предикат, определяющий, какие имена файлов включать в результат
 * @returns Список абсолютных путей отобранных файлов
 */
const walk = async (directory, predicate) => {
	const entries = await readdir(directory, {
		withFileTypes: true,
	})

	const files = []

	for (const entry of entries) {
		const path = join(directory, entry.name)

		if (entry.isDirectory()) {
			files.push(...(await walk(path, predicate)))
			continue
		}

		if (entry.isFile() && predicate(entry.name)) {
			files.push(path)
		}
	}

	return files
}

/**
 * Заменяет разделители пути на POSIX-разделители (`/`).
 *
 * @param value - Путь с разделителями текущей операционной системы
 * @returns Путь с разделителями `/`
 */
const toPosix = (value) => {
	return value.split(sep).join("/")
}

/**
 * Проверяет, является ли значение SVG-атрибута заменяемым цветом.
 *
 * @remarks
 * Значения `none`, `transparent`, `currentColor` и ссылки на градиенты (`url(...)`)
 * не считаются заменяемыми.
 *
 * @param value - Значение атрибута `fill`, `stroke` или `stop-color`
 * @returns `true`, если значение можно заменить на цветовой проп
 */
const isPaintColor = (value) => {
	const normalized = value.trim().toLowerCase()

	return (
		normalized !== "none" &&
		normalized !== "transparent" &&
		normalized !== "currentcolor" &&
		!normalized.startsWith("url(")
	)
}

/**
 * Собирает уникальные заменяемые цвета из исходного кода SVG.
 *
 * @param svg - Содержимое SVG-файла
 * @returns Массив уникальных цветов, которые можно заменить на пропы
 */
const getColors = (svg) => {
	const colors = []

	const colorPattern = /\b(?:fill|stroke|stop-color)="([^"]+)"/gu

	for (const match of svg.matchAll(colorPattern)) {
		const value = match[1]

		if (isPaintColor(value) && !colors.includes(value)) {
			colors.push(value)
		}
	}

	return colors
}

/**
 * Преобразует строку в корректное строковое JS-представление с экранированием.
 *
 * @param value - Исходная строка
 * @returns Строка, пригодная для вставки в исходный код
 */
const escapeJsString = (value) => {
	return JSON.stringify(value)
}

/**
 * Преобразует SVG-разметку в JSX.
 *
 * @remarks
 * Первые два найденных цвета заменяются на пропы `color` и `secondaryColor`,
 * а SVG-атрибуты приводятся к JSX-нотации.
 *
 * @param svg - Содержимое SVG-файла
 * @param colors - Цвета, которые должны быть заменены на пропы
 * @returns JSX-разметка в виде строки
 */
const svgToJsx = (svg, colors) => {
	const colorProps = new Map()

	if (colors[0]) {
		colorProps.set(colors[0], "color")
	}

	if (colors[1]) {
		colorProps.set(colors[1], "secondaryColor")
	}

	return svg
		.replace(/\s+xmlns="[^"]*"/gu, "")
		.replace(/\b([A-Za-z_:][\w:.-]*)="([^"]*)"/gu, (_full, rawName, value) => {
			const name = SVG_ATTRIBUTE_TO_JSX.get(rawName) ?? rawName

			const colorProp = colorProps.get(value)

			if (colorProp && ["fill", "stroke", "stop-color"].includes(rawName)) {
				return `${name}={${colorProp}}`
			}

			return `${name}=${escapeJsString(value)}`
		})
}

/**
 * Формирует исходный код компонента иконки на основе SVG.
 *
 * @param fileName - Имя SVG-файла
 * @param svg - Содержимое SVG-файла
 * @returns Исходный код компонента иконки
 * @throws
 * Если в SVG не найдено ни одного заменяемого цвета или таких цветов больше двух.
 */
const createComponentSource = (fileName, svg) => {
	const componentName = basename(fileName, ".svg")

	const colors = getColors(svg)

	if (colors.length === 0) {
		throw new Error(`В файле ${fileName} не найдено заменяемого цвета`)
	}

	if (colors.length > 2) {
		throw new Error(`В файле ${fileName} найдено более двух цветов: ${colors.join(", ")}`)
	}

	const props =
		colors.length === 1
			? `{ color = ${escapeJsString(PRIMARY_COLOR_DEFAULT)}, ...props }`
			: `{ color = ${escapeJsString(PRIMARY_COLOR_DEFAULT)}, secondaryColor = ${escapeJsString(
					SECONDARY_COLOR_DEFAULT,
				)}, ...props }`

	const jsx = svgToJsx(svg, colors).replace("<svg ", "<svg {...props} ")

	return `import type { IIconComponentProps } from "./types.js"

export const ${componentName} = (${props}: IIconComponentProps) => (
	${jsx}
)

export default ${componentName}
`
}

/**
 * Генерирует содержимое файла `src/icons/collection/index.ts`.
 *
 * @param icons - Метаданные сгенерированных иконок
 * @returns Исходный код индексного файла коллекции
 */
const createCollectionIndexSource = (icons) => {
	const exports = icons
		.map(({ componentName, relativePath }) => {
			return `export { default as ${componentName} } from "./${relativePath}"`
		})
		.join("\n")

	return `/**
 * СГЕНЕРИРОВАНО АВТОМАТИЧЕСКИ скриптом scripts/sync-icons.mjs.
 * Не редактировать вручную.
 */

export type { IIconComponentProps } from "./types.js"

${exports}
`
}

/**
 * Генерирует содержимое файла `src/icons/vite/icon/Icon.registry.ts`.
 *
 * @param icons - Метаданные сгенерированных иконок
 * @returns Исходный код Vite-реестра иконок
 */
const createViteRegistrySource = (icons) => {
	const entries = icons
		.map(({ name, relativePath }) => {
			return `\t${name}: () => import("../../collection/${relativePath}"),`
		})
		.join("\n")

	return `/**
 * СГЕНЕРИРОВАНО АВТОМАТИЧЕСКИ скриптом scripts/sync-icons.mjs.
 * Источник истины: icons/source/*.svg.
 * Не редактировать вручную.
 */

import type { TIconRegistry } from "./Icon.types.js"

export const defaultIcons = {
${entries}
} as const satisfies TIconRegistry

export type TDefaultIconName = keyof typeof defaultIcons
`
}

/**
 * Удаляет ранее сгенерированные компоненты и создаёт новые из оптимизированных SVG.
 *
 * @returns Количество сгенерированных компонентов
 */
const generateComponents = async () => {
	const optimizedFiles = (await walk(optimizedDir, (name) => name.toLowerCase().endsWith(".svg"))).sort((a, b) =>
		a.localeCompare(b),
	)

	const previousGeneratedFiles = await walk(collectionDir, (name) => name.endsWith("Icon.tsx"))

	await Promise.all(previousGeneratedFiles.map((file) => rm(file)))

	for (const file of optimizedFiles) {
		const svg = await readFile(file, "utf-8")

		const fileName = basename(file)

		const target = join(collectionDir, fileName.replace(/\.svg$/u, ".tsx"))

		await writeFile(target, createComponentSource(fileName, svg))
	}

	return optimizedFiles.length
}

/**
 * Собирает метаданные иконок и генерирует индекс коллекции и Vite-реестр.
 *
 * @returns Количество обработанных иконок
 * @throws
 * Если имя файла некорректно или после нормализации встречаются дубликаты.
 */
const generateMetadata = async () => {
	const files = (await walk(collectionDir, (name) => name.endsWith("Icon.tsx"))).sort((a, b) => a.localeCompare(b))

	const seenNames = new Set()
	const seenComponents = new Set()

	const icons = files.map((file) => {
		const componentName = basename(file, ".tsx")

		const name = componentName.slice(0, -"Icon".length)

		const relativePath = toPosix(relative(collectionDir, file)).replace(/\.tsx$/u, ".js")

		if (!/^[A-Za-z_$][A-Za-z0-9_$]*$/u.test(componentName)) {
			throw new Error(`Некорректное имя файла компонента иконки: ${componentName}.tsx`)
		}

		if (!name) {
			throw new Error(`Некорректное имя иконки: ${componentName}.tsx`)
		}

		if (seenNames.has(name)) {
			throw new Error(`Дублирующееся имя иконки после нормализации: ${name}`)
		}

		if (seenComponents.has(componentName)) {
			throw new Error(`Дублирующийся компонент иконки после нормализации: ${componentName}`)
		}

		seenNames.add(name)
		seenComponents.add(componentName)

		return {
			componentName,
			name,
			relativePath,
		}
	})

	const indexSource = createCollectionIndexSource(icons)

	const viteRegistrySource = createViteRegistrySource(icons)

	await Promise.all([writeFile(collectionIndex, indexSource), writeFile(viteRegistry, viteRegistrySource)])

	return icons.length
}

await run("npm", ["run", "build:icons"])

const generatedCount = await generateComponents()

const iconCount = await generateMetadata()

console.log(
	`Синхронизировано иконок: ${iconCount} из ${relative(rootDir, optimizedDir)} (оптимизированных SVG-файлов: ${generatedCount})`,
)
