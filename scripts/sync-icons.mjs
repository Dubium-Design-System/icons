import { spawn } from "node:child_process"
import { readdir, readFile, rm, writeFile } from "node:fs/promises"
import { basename, join, relative, sep } from "node:path"
import { fileURLToPath } from "node:url"

import {
	ICON_COMPONENT_FILE_REGEX,
	JS_IDENTIFIER_REGEX,
	OPTIMIZED_ICON_FILE_REGEX,
	STARTS_WITH_DIGIT_REGEX,
	SVG_ATTRIBUTE_REGEX,
	SVG_FILE_REGEX,
	SVG_PAINT_COLOR_REGEX,
	SVG_XMLNS_ATTRIBUTE_REGEX,
	TSX_EXTENSION_REGEX,
} from "./sync-icons.regex.mjs"

/**
 * Корневая директория проекта.
 */
const rootDir = fileURLToPath(new URL("../", import.meta.url))

/**
 * Каталог optimized SVG.
 *
 * Содержит три source-категории:
 *
 * - colors;
 * - filled;
 * - outline.
 */
const optimizedDir = fileURLToPath(new URL("../icons/optimized/", import.meta.url))

/**
 * Каталог generated React-компонентов.
 */
const collectionDir = fileURLToPath(new URL("../src/icons/collection/", import.meta.url))

/**
 * Generated index коллекции.
 */
const collectionIndex = fileURLToPath(new URL("../src/icons/collection/index.ts", import.meta.url))

/**
 * Поддерживаемые source-категории.
 */
const SOURCE_KINDS = new Set(["colors", "filled", "outline"])

/**
 * Source-категория, для которой исходные
 * SVG-цвета сохраняются без изменений.
 */
const COLORS_SOURCE_KIND = "colors"

/**
 * Основной цвет динамической иконки по умолчанию.
 */
const PRIMARY_COLOR_DEFAULT = "var(--icon-color, currentColor)"

/**
 * Вторичный цвет динамической иконки по умолчанию.
 */
const SECONDARY_COLOR_DEFAULT = "var(--icon-secondary-color, currentColor)"

/**
 * Соответствие SVG-атрибутов React/JSX props.
 */
const SVG_ATTRIBUTE_TO_JSX = new Map([
	["clip-path", "clipPath"],
	["clip-rule", "clipRule"],
	["fill-opacity", "fillOpacity"],
	["fill-rule", "fillRule"],
	["gradientUnits", "gradientUnits"],
	["stop-color", "stopColor"],
	["stop-opacity", "stopOpacity"],
	["stroke-dasharray", "strokeDasharray"],
	["stroke-dashoffset", "strokeDashoffset"],
	["stroke-linecap", "strokeLinecap"],
	["stroke-linejoin", "strokeLinejoin"],
	["stroke-miterlimit", "strokeMiterlimit"],
	["stroke-opacity", "strokeOpacity"],
	["stroke-width", "strokeWidth"],
])

/**
 * Paint-атрибуты SVG.
 */
const COLOR_ATTRIBUTES = new Set(["fill", "stroke", "stop-color"])

/**
 * Запускает внешнюю команду из корня проекта.
 *
 * @param {string} command Команда.
 * @param {string[]} args Аргументы.
 * @returns {Promise<void>} Результат выполнения.
 */
const run = (command, args) => {
	return new Promise((resolve, reject) => {
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
}

/**
 * Рекурсивно собирает файлы.
 *
 * @param {string} directory Директория.
 * @param {(name: string) => boolean} predicate Фильтр.
 * @returns {Promise<string[]>} Пути файлов.
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
 * Приводит путь к POSIX-формату.
 *
 * @param {string} value Путь.
 * @returns {string} POSIX-путь.
 */
const toPosix = (value) => {
	return value.split(sep).join("/")
}

/**
 * Определяет source-категорию optimized SVG.
 *
 * @example
 * ```text
 * icons/optimized/colors/LogoIcon.svg
 * -> colors
 *
 * icons/optimized/filled/UserFilledIcon.svg
 * -> filled
 *
 * icons/optimized/outline/UserOutlineIcon.svg
 * -> outline
 * ```
 *
 * @param {string} file Абсолютный путь SVG.
 * @returns {string} Source-категория.
 *
 * @throws
 * Если SVG находится вне поддерживаемой категории.
 */
const getSourceKind = (file) => {
	const optimizedRelativePath = relative(optimizedDir, file)

	const [sourceKind] = optimizedRelativePath.split(sep)

	if (!SOURCE_KINDS.has(sourceKind)) {
		throw new Error(`Неизвестная source-категория для "${file}": ${sourceKind}`)
	}

	return sourceKind
}

/**
 * Создаёт валидный JavaScript identifier
 * React-компонента.
 *
 * Публичное имя не изменяется.
 *
 * @example
 * ```text
 * UserFilled
 * -> UserFilledIcon
 *
 * 123Filled
 * -> _123FilledIcon
 * ```
 *
 * @param {string} name Публичное имя.
 * @returns {string} Имя React-компонента.
 */
const createComponentName = (name) => {
	return STARTS_WITH_DIGIT_REGEX.test(name) ? `_${name}Icon` : `${name}Icon`
}

/**
 * Получает metadata из имени optimized SVG.
 *
 * `Filled` и `Outline` уже являются
 * частью публичного имени.
 *
 * @example
 * ```text
 * UserIcon.svg
 * -> name: User
 *
 * UserFilledIcon.svg
 * -> name: UserFilled
 *
 * UserOutlineIcon.svg
 * -> name: UserOutline
 *
 * 123FilledIcon.svg
 * -> name: 123Filled
 * -> componentName: _123FilledIcon
 * ```
 *
 * @param {string} fileName Имя optimized SVG.
 * @returns {{
 *   name: string,
 *   componentName: string
 * }} Metadata.
 */
const getIconMetadata = (fileName) => {
	const match = OPTIMIZED_ICON_FILE_REGEX.exec(fileName)

	if (!match) {
		throw new Error(`Некорректное имя optimized SVG: ${fileName}. Ожидается <Name>Icon.svg`)
	}

	const name = match[1]

	if (!name) {
		throw new Error(`Некорректное имя иконки: ${fileName}`)
	}

	const componentName = createComponentName(name)

	if (!JS_IDENTIFIER_REGEX.test(componentName)) {
		throw new Error(`Некорректное имя React-компонента для ${fileName}: ${componentName}`)
	}

	return {
		name,
		componentName,
	}
}

/**
 * Проверяет, является ли paint-значение
 * заменяемым цветом.
 *
 * `currentColor` считается заменяемым.
 *
 * Это важно для `filled` и `outline`,
 * где большинство SVG используют именно `currentColor`.
 *
 * Не заменяются:
 *
 * - `none`;
 * - `transparent`;
 * - `url(...)`.
 *
 * @param {string} value Paint-значение.
 * @returns {boolean} Можно ли заменить значение.
 */
const isPaintColor = (value) => {
	const normalized = value.trim().toLowerCase()

	const isValidPaintColor = normalized !== "none" && normalized !== "transparent" && !normalized.startsWith("url(")

	return isValidPaintColor
}

/**
 * Собирает уникальные заменяемые цвета.
 *
 * `currentColor` также входит в список.
 *
 * Первый цвет становится `color`,
 * второй — `secondaryColor`.
 *
 * Для `colors` эта функция не вызывается.
 *
 * @param {string} svg SVG-разметка.
 * @returns {string[]} Цвета.
 */
const getColors = (svg) => {
	const colors = []

	for (const match of svg.matchAll(SVG_PAINT_COLOR_REGEX)) {
		const value = match[1]

		if (isPaintColor(value) && !colors.includes(value)) {
			colors.push(value)
		}
	}

	return colors
}

/**
 * Формирует JavaScript string literal.
 *
 * @param {string} value Значение.
 * @returns {string} String literal.
 */
const escapeJsString = (value) => {
	return JSON.stringify(value)
}

/**
 * Преобразует SVG в JSX.
 *
 * Если `colors` пустой, исходные paint-значения
 * сохраняются без изменений.
 *
 * @param {string} svg SVG-разметка.
 * @param {string[]} colors Цвета для замены.
 * @returns {string} JSX.
 */
const svgToJsx = (svg, colors = []) => {
	const colorProps = new Map()

	if (colors[0]) {
		colorProps.set(colors[0], "color")
	}

	if (colors[1]) {
		colorProps.set(colors[1], "secondaryColor")
	}

	return svg.replace(SVG_XMLNS_ATTRIBUTE_REGEX, "").replace(SVG_ATTRIBUTE_REGEX, (_full, rawName, value) => {
		const name = SVG_ATTRIBUTE_TO_JSX.get(rawName) ?? rawName

		const colorProp = colorProps.get(value)

		if (colorProp && COLOR_ATTRIBUTES.has(rawName)) {
			return `${name}={${colorProp}}`
		}

		return `${name}=${escapeJsString(value)}`
	})
}

/**
 * Добавляет стандартные SVG props
 * в корневой `<svg>`.
 *
 * Служебные `color` и `secondaryColor`
 * предварительно исключаются из `svgProps`.
 *
 * @param {string} jsx JSX.
 * @returns {string} JSX с svgProps.
 */
const addSvgProps = (jsx) => {
	return jsx.replace("<svg ", "<svg {...svgProps} ")
}

/**
 * Создаёт React-компонент SVG.
 *
 * Для `colors`:
 *
 * - исходные цвета сохраняются;
 * - количество цветов не анализируется;
 * - `color` и `secondaryColor` не попадают в DOM.
 *
 * Для `filled` / `outline`:
 *
 * - первый paint-цвет становится `color`;
 * - второй становится `secondaryColor`;
 * - `currentColor` также считается paint-цветом;
 * - допускается максимум два цвета.
 *
 * @param {string} fileName Имя SVG.
 * @param {string} componentName Имя компонента.
 * @param {string} svg SVG-разметка.
 * @param {boolean} preserveColors Сохранять исходные цвета.
 * @returns {string} Generated TSX.
 */
const createComponentSource = (fileName, componentName, svg, preserveColors) => {
	if (preserveColors) {
		const jsx = addSvgProps(svgToJsx(svg))

		return `import type { IIconComponentProps } from "./types.js"

/**
 * Цветная SVG-иконка.
 *
 * Исходные цвета сохраняются без изменений.
 */
export const ${componentName} = ({
	color: _color,
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	${jsx}
)

export default ${componentName}
`
	}

	const colors = getColors(svg)

	if (colors.length === 0) {
		throw new Error(`В файле ${fileName} не найдено заменяемого цвета`)
	}

	if (colors.length > 2) {
		throw new Error(`В файле ${fileName} найдено более двух цветов: ${colors.join(", ")}`)
	}

	const primaryColorProp = `color = ${escapeJsString(PRIMARY_COLOR_DEFAULT)}`

	const secondaryColorProp =
		colors.length === 1
			? "secondaryColor: _secondaryColor"
			: `secondaryColor = ${escapeJsString(SECONDARY_COLOR_DEFAULT)}`

	const componentProps = `{
	${primaryColorProp},
	${secondaryColorProp},
	...svgProps
}`

	const jsx = addSvgProps(svgToJsx(svg, colors))

	return `import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ${componentName} = (
	${componentProps}: IIconComponentProps
) => (
	${jsx}
)

export default ${componentName}
`
}

/**
 * Генерирует `collection/index.ts`.
 *
 * @param {{
 *   name: string,
 *   componentName: string,
 *   relativePath: string
 * }[]} icons Metadata иконок.
 * @returns {string} Generated index.
 */
const createCollectionIndexSource = (icons) => {
	const exports = icons
		.map(({ componentName, relativePath }) => `export { default as ${componentName} } from "./${relativePath}"`)
		.join("\n")

	const names = icons.length === 0 ? "never" : icons.map(({ name }) => `\t| ${escapeJsString(name)}`).join("\n")

	return `/**
 * СГЕНЕРИРОВАНО АВТОМАТИЧЕСКИ.
 *
 * Не редактировать вручную.
 * Файл создаётся scripts/sync-icons.mjs.
 */

/**
 * Все публичные имена встроенных иконок.
 */
export type TCollectionIconName =
${names}

export type { IIconComponentProps } from "./types.js"

${exports}
`
}

/**
 * Генерирует React-компоненты из optimized SVG.
 *
 * `colors`, `filled` и `outline` читаются рекурсивно,
 * но generated collection остаётся плоской.
 *
 * @returns {Promise<number>} Количество компонентов.
 */
const generateComponents = async () => {
	const optimizedFiles = (await walk(optimizedDir, (name) => SVG_FILE_REGEX.test(name))).sort((a, b) =>
		a.localeCompare(b),
	)

	const previousGeneratedFiles = await walk(collectionDir, (name) => ICON_COMPONENT_FILE_REGEX.test(name))

	await Promise.all(previousGeneratedFiles.map((file) => rm(file)))

	const generatedNames = new Set()

	for (const file of optimizedFiles) {
		const sourceKind = getSourceKind(file)

		const preserveColors = sourceKind === COLORS_SOURCE_KIND

		const svg = await readFile(file, "utf-8")

		const fileName = basename(file)

		const { name, componentName } = getIconMetadata(fileName)

		const generatedFileName = `${name}Icon.tsx`

		const normalizedGeneratedName = generatedFileName.toLowerCase()

		if (generatedNames.has(normalizedGeneratedName)) {
			throw new Error(`Дублирующееся имя generated-компонента: ${generatedFileName}`)
		}

		generatedNames.add(normalizedGeneratedName)

		const target = join(collectionDir, generatedFileName)

		await writeFile(target, createComponentSource(fileName, componentName, svg, preserveColors))
	}

	return optimizedFiles.length
}

/**
 * Собирает metadata generated-компонентов
 * и обновляет `collection/index.ts`.
 *
 * @returns {Promise<number>} Количество иконок.
 */
const generateMetadata = async () => {
	const files = (await walk(collectionDir, (name) => ICON_COMPONENT_FILE_REGEX.test(name))).sort((a, b) =>
		a.localeCompare(b),
	)

	const seenNames = new Set()

	const seenComponents = new Set()

	const icons = files.map((file) => {
		const fileName = basename(file)

		const publicFileName = fileName.replace(TSX_EXTENSION_REGEX, ".svg")

		const { name, componentName } = getIconMetadata(publicFileName)

		const relativePath = toPosix(relative(collectionDir, file)).replace(TSX_EXTENSION_REGEX, ".js")

		if (seenNames.has(name)) {
			throw new Error(`Дублирующееся имя иконки: ${name}`)
		}

		if (seenComponents.has(componentName)) {
			throw new Error(`Дублирующийся React-компонент: ${componentName}`)
		}

		seenNames.add(name)

		seenComponents.add(componentName)

		return {
			name,
			componentName,
			relativePath,
		}
	})

	await writeFile(collectionIndex, createCollectionIndexSource(icons))

	return icons.length
}

/**
 * Сначала полностью пересобираем `icons/optimized`,
 * затем generated React-компоненты и metadata.
 */
await run("npm", ["run", "build:icons"])

const generatedCount = await generateComponents()

const iconCount = await generateMetadata()

console.log(
	`Синхронизировано иконок: ${iconCount} из ${relative(rootDir, optimizedDir)} (optimized SVG: ${generatedCount})`,
)
