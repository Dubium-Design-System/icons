import { readdir, readFile } from "node:fs/promises"
import { basename, extname, isAbsolute, join, relative, resolve } from "node:path"

import type { Plugin, ViteDevServer } from "vite"

/**
 * Идентификатор виртуального модуля, через который загружается реестр иконок.
 *
 * @remarks
 * Используется в приложении как источник `iconRegistry` с ленивыми
 * загрузчиками всех иконок, обнаруженных плагином.
 */
const VIRTUAL_MODULE_ID = "virtual:@dubium/icons-registry"

/**
 * Разрешённый идентификатор виртуального модуля для Vite.
 *
 * @remarks
 * Префикс `\0` защищает модуль от внешнего доступа в dev-сервере.
 */
const RESOLVED_VIRTUAL_MODULE_ID = `\0${VIRTUAL_MODULE_ID}`

/**
 * Расширения файлов, которые плагин считает исходниками и сканирует.
 *
 * @remarks
 * Файлы с другими расширениями игнорируются при рекурсивном обходе проекта.
 */
const DEFAULT_EXTENSIONS = new Set([".js", ".jsx", ".mjs", ".cjs", ".ts", ".tsx"])

/**
 * Каталоги, которые плагин пропускает при рекурсивном обходе.
 *
 * @remarks
 * Позволяет не сканировать служебные и сборочные директории, такие как
 * `node_modules`, `dist`, `.git` и т.п.
 */
const DEFAULT_IGNORED_DIRECTORIES = new Set([
	".git",
	".next",
	".nuxt",
	".output",
	".turbo",
	"build",
	"coverage",
	"dist",
	"node_modules",
])

/**
 * Источник, из которого разрешаются имена иконок.
 */
export type TDubiumIconSource =
	| {
			/**
			 * Локальный источник иконок.
			 *
			 * @example
			 * `UserIcon.tsx` при suffix `Icon` даёт имя `User`.
			 */
			type: "local"

			/**
			 * Путь к директории с компонентами относительно Vite root.
			 */
			path: string

			/**
			 * Суффикс имени файла, по которому распознаются компоненты иконок.
			 *
			 * @default "Icon"
			 */
			suffix?: string
	  }
	| {
			/**
			 * Package fallback для иконок, отсутствующих в local sources.
			 *
			 * @remarks
			 * Допускается не более одного `package` source.
			 * Шаблон должен содержать `{name}`.
			 */
			type: "package"

			/**
			 * Шаблон пути импорта.
			 *
			 * @example
			 * `@dubium/icons/icons/{name}`
			 */
			importPattern: string
	  }

/**
 * Настройки Vite-плагина {@link dubiumIcons}.
 */
export interface DubiumIconsPluginOptions {
	/**
	 * Имена JSX-компонентов, которые считаются иконками.
	 *
	 * @default ["Icon"]
	 */
	componentNames?: readonly string[]

	/**
	 * Дополнительные строковые поля, которые считаются ссылками на иконки.
	 *
	 * @example
	 * ```ts
	 * dubiumIcons({
	 * 	propertyNames: ["iconName"],
	 * })
	 * ```
	 */
	propertyNames?: readonly string[]

	/**
	 * Директории, которые плагин сканирует на предмет использования иконок.
	 *
	 * @default ["src"]
	 */
	scan?: readonly string[]

	/**
	 * Источники иконок.
	 *
	 * @remarks
	 * Можно указать несколько `local` sources.
	 * Они проверяются сверху вниз.
	 *
	 * Дополнительно можно указать максимум один `package` source,
	 * который используется как fallback.
	 *
	 * @example
	 * ```ts
	 * dubiumIcons({
	 * 	sources: [
	 * 		{
	 * 			type: "local",
	 * 			path: "src/icons",
	 * 		},
	 * 		{
	 * 			type: "package",
	 * 			importPattern: "@dubium/icons/icons/{name}",
	 * 		},
	 * 	],
	 * })
	 * ```
	 */
	sources?: readonly TDubiumIconSource[]
}

/**
 * Результат сканирования одного файла.
 *
 * @internal
 */
interface ScanResult {
	/** Количество найденных динамических имён иконок. */
	dynamicNames: number

	/** Множество статических имён иконок, найденных в файле. */
	icons: Set<string>
}

/**
 * Локальный каталог иконок, собранный из файловой системы.
 *
 * @internal
 */
interface ILocalSourceCatalog {
	/** Соответствие имени иконки пути к её компоненту. */
	icons: Map<string, string>
}

/**
 * Состояние лексического обхода исходного файла.
 *
 * @internal
 */
type TSourceState = "code" | "single-quote" | "double-quote" | "template" | "line-comment" | "block-comment"

/**
 * Приводит пути к Unix-разделителю `/`.
 *
 * @param value - Путь с разделителями текущей операционной системы
 * @returns Путь с разделителями `/`
 */
const normalizePath = (value: string): string => value.replaceAll("\\", "/")

/**
 * Проверяет, находится ли путь внутри указанной директории.
 *
 * @param directory - Абсолютный путь к родительской директории
 * @param path - Проверяемый путь
 * @returns `true`, если путь лежит внутри директории или совпадает с ней
 */
const isPathInsideDirectory = (directory: string, path: string): boolean => {
	const relativePath = relative(directory, path)

	return relativePath === "" || (!relativePath.startsWith("..") && !isAbsolute(relativePath))
}

/**
 * Проверяет, что два множества содержат одинаковые элементы.
 *
 * @param left - Первое множество
 * @param right - Второе множество
 * @returns `true`, если множества равны
 */
const setsEqual = (left: ReadonlySet<string>, right: ReadonlySet<string>): boolean => {
	if (left.size !== right.size) {
		return false
	}

	for (const value of left) {
		if (!right.has(value)) {
			return false
		}
	}

	return true
}

/**
 * Экранирует спецсимволы регулярного выражения.
 *
 * @param value - Строка для экранирования
 * @returns Строка, безопасная для использования в `RegExp`
 */
const escapeRegExp = (value: string): string => value.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&")

/**
 * Проверяет, может ли символ быть частью имени JSX-компонента.
 *
 * @param character - Проверяемый символ
 * @returns `true`, если символ допустим внутри идентификатора
 */
const isIdentifierCharacter = (character: string | undefined): boolean =>
	character !== undefined && /[A-Za-z0-9_$]/u.test(character)

/**
 * Проверяет, начинается ли в указанной позиции JSX-тег одного
 * из настроенных компонентов.
 *
 * @param source - Исходный текст файла
 * @param index - Позиция символа `<`
 * @param componentNames - Имена отслеживаемых компонентов
 * @returns `true`, если найден подходящий JSX-тег
 */
const isComponentTagStart = (source: string, index: number, componentNames: readonly string[]): boolean => {
	if (source[index] !== "<") {
		return false
	}

	let nameStart = index + 1

	while (/\s/u.test(source[nameStart] ?? "")) {
		nameStart += 1
	}

	for (const componentName of componentNames) {
		if (!source.startsWith(componentName, nameStart)) {
			continue
		}

		const nextCharacter = source[nameStart + componentName.length]

		if (!isIdentifierCharacter(nextCharacter)) {
			return true
		}
	}

	return false
}

/**
 * Находит позиции JSX-тегов нужных компонентов, игнорируя комментарии
 * и JavaScript-строки.
 *
 * @remarks
 * Благодаря этому текст вроде:
 *
 * ```ts
 * // <Icon name="User" />
 * const example = '<Icon name="User" />'
 * ```
 *
 * не считается реальным использованием иконки.
 *
 * Сам JSX-тег не изменяется и далее разбирается по исходному тексту,
 * поэтому реальные строковые атрибуты вроде `name="User"` продолжают
 * корректно распознаваться.
 *
 * @param source - Исходный текст файла
 * @param componentNames - Имена отслеживаемых компонентов
 * @returns Позиции начала найденных JSX-тегов
 */
const findComponentTagStarts = (source: string, componentNames: readonly string[]): number[] => {
	const positions: number[] = []

	let state: TSourceState = "code"
	let escaped = false

	for (let index = 0; index < source.length; index += 1) {
		const character = source[index]
		const nextCharacter = source[index + 1]

		if (state === "line-comment") {
			if (character === "\n" || character === "\r") {
				state = "code"
			}

			continue
		}

		if (state === "block-comment") {
			if (character === "*" && nextCharacter === "/") {
				state = "code"
				index += 1
			}

			continue
		}

		if (state === "single-quote") {
			if (escaped) {
				escaped = false
				continue
			}

			if (character === "\\") {
				escaped = true
				continue
			}

			if (character === "'") {
				state = "code"
			}

			continue
		}

		if (state === "double-quote") {
			if (escaped) {
				escaped = false
				continue
			}

			if (character === "\\") {
				escaped = true
				continue
			}

			if (character === '"') {
				state = "code"
			}

			continue
		}

		if (state === "template") {
			if (escaped) {
				escaped = false
				continue
			}

			if (character === "\\") {
				escaped = true
				continue
			}

			if (character === "`") {
				state = "code"
			}

			continue
		}

		if (character === "/" && nextCharacter === "/") {
			state = "line-comment"
			index += 1
			continue
		}

		if (character === "/" && nextCharacter === "*") {
			state = "block-comment"
			index += 1
			continue
		}

		if (character === "'") {
			state = "single-quote"
			continue
		}

		if (character === '"') {
			state = "double-quote"
			continue
		}

		if (character === "`") {
			state = "template"
			continue
		}

		if (character === "<" && isComponentTagStart(source, index, componentNames)) {
			positions.push(index)
		}
	}

	return positions
}

/**
 * Находит конец открывающего JSX-тега, начиная с заданной позиции.
 *
 * @remarks
 * Учитывает строки в кавычках и фигурные скобки выражений.
 *
 * @param source - Исходный текст файла
 * @param startIndex - Индекс начала тега
 * @returns Индекс закрывающего символа `>` или `-1`, если тег не найден
 */
const findTagEnd = (source: string, startIndex: number): number => {
	let quote: "'" | '"' | "`" | null = null
	let escaped = false
	let braceDepth = 0

	for (let index = startIndex; index < source.length; index += 1) {
		const character = source[index]

		if (quote) {
			if (escaped) {
				escaped = false
				continue
			}

			if (character === "\\") {
				escaped = true
				continue
			}

			if (character === quote) {
				quote = null
			}

			continue
		}

		if (character === "'" || character === '"' || character === "`") {
			quote = character
			continue
		}

		if (character === "{") {
			braceDepth += 1
			continue
		}

		if (character === "}") {
			braceDepth = Math.max(0, braceDepth - 1)
			continue
		}

		if (character === ">" && braceDepth === 0) {
			return index
		}
	}

	return -1
}

/**
 * Извлекает статическое значение атрибута `name` из открывающего тега.
 *
 * @param openingTag - Текст открывающего тега
 * @returns Имя иконки или `null`, если имя не статическое
 */
const parseStaticName = (openingTag: string): string | null => {
	const quotedAttribute = /\bname\s*=\s*(["'])(.*?)\1/su.exec(openingTag)

	if (quotedAttribute) {
		return quotedAttribute[2].trim()
	}

	const expressionAttribute = /\bname\s*=\s*\{\s*(?:(["'])(.*?)\1|`([^`${}]*)`)\s*\}/su.exec(openingTag)

	if (!expressionAttribute) {
		return null
	}

	return (expressionAttribute[2] ?? expressionAttribute[3] ?? "").trim()
}

/**
 * Проверяет наличие атрибута `name` в открывающем теге.
 *
 * @param openingTag - Текст открывающего тега
 * @returns `true`, если атрибут `name` присутствует
 */
const hasNameAttribute = (openingTag: string): boolean => /\bname\s*=/u.test(openingTag)

/**
 * Ищет строковые значения указанных свойств в исходнике.
 *
 * @param source - Исходный текст файла
 * @param propertyNames - Имена свойств, значения которых считаются иконками
 * @param icons - Набор, в который добавляются найденные имена
 */
const scanPropertyNames = (source: string, propertyNames: readonly string[], icons: Set<string>): void => {
	for (const propertyName of propertyNames) {
		const escapedName = escapeRegExp(propertyName)

		const pattern = new RegExp(
			`(?:\\b${escapedName}\\b|["']${escapedName}["'])\\s*:\\s*(["'])([^"'\\n\\r]+)\\1`,
			"gu",
		)

		for (const match of source.matchAll(pattern)) {
			const name = match[2]?.trim()

			if (name) {
				icons.add(name)
			}
		}
	}
}

/**
 * Сканирует исходник и собирает статические имена иконок.
 *
 * @remarks
 * JSX-теги внутри комментариев и JavaScript-строк игнорируются.
 *
 * @param source - Исходный текст файла
 * @param componentNames - Имена компонентов-иконок
 * @param propertyNames - Имена свойств со строковыми ссылками на иконки
 * @returns Результат сканирования: найденные имена и число динамических
 */
const scanSource = (
	source: string,
	componentNames: readonly string[],
	propertyNames: readonly string[],
): ScanResult => {
	const icons = new Set<string>()
	const tagStarts = findComponentTagStarts(source, componentNames)

	let dynamicNames = 0

	for (const tagStart of tagStarts) {
		const tagEnd = findTagEnd(source, tagStart)

		if (tagEnd === -1) {
			continue
		}

		const openingTag = source.slice(tagStart, tagEnd + 1)
		const iconName = parseStaticName(openingTag)

		if (iconName) {
			icons.add(iconName)
			continue
		}

		if (hasNameAttribute(openingTag)) {
			dynamicNames += 1
		}
	}

	scanPropertyNames(source, propertyNames, icons)

	return {
		dynamicNames,
		icons,
	}
}

/**
 * Рекурсивно собирает исходные файлы в директории.
 *
 * @remarks
 * Игнорирует каталоги из `DEFAULT_IGNORED_DIRECTORIES` и файлы
 * с расширениями вне `DEFAULT_EXTENSIONS`.
 *
 * @param directory - Абсолютный путь к директории
 * @returns Список путей к исходным файлам
 */
const getSourceFiles = async (directory: string): Promise<string[]> => {
	let entries

	try {
		entries = await readdir(directory, {
			withFileTypes: true,
		})
	} catch {
		return []
	}

	const files: string[] = []

	for (const entry of entries) {
		const path = join(directory, entry.name)

		if (entry.isDirectory()) {
			if (!DEFAULT_IGNORED_DIRECTORIES.has(entry.name)) {
				files.push(...(await getSourceFiles(path)))
			}

			continue
		}

		if (entry.isFile() && DEFAULT_EXTENSIONS.has(extname(entry.name).toLowerCase())) {
			files.push(path)
		}
	}

	return files
}

/**
 * Строит локальный каталог иконок из файлов в директории.
 *
 * @remarks
 * Имя иконки получается из имени файла вычитанием суффикса.
 * Например, `UserIcon.tsx` при суффиксе `Icon` даёт имя `User`.
 *
 * @param root - Корень Vite-проекта
 * @param source - Настройки локального источника
 * @returns Каталог иконок с путями к компонентам
 * @throws Если в одном local source найдены две иконки с одинаковым именем
 */
const buildLocalCatalog = async (
	root: string,
	source: Extract<TDubiumIconSource, { type: "local" }>,
): Promise<ILocalSourceCatalog> => {
	const absolutePath = resolve(root, source.path)
	const suffix = source.suffix ?? "Icon"
	const files = await getSourceFiles(absolutePath)

	const icons = new Map<string, string>()

	for (const file of files) {
		const extension = extname(file)
		const fileBaseName = basename(file, extension)

		if (!fileBaseName.endsWith(suffix)) {
			continue
		}

		const name = fileBaseName.slice(0, -suffix.length)

		if (!name) {
			continue
		}

		const normalizedFile = normalizePath(file)
		const existingFile = icons.get(name)

		if (existingFile) {
			throw new Error(
				`[@dubium/icons] Дублирующееся имя локальной иконки "${name}".\n` +
					"Найдено в:\n" +
					`  - ${existingFile}\n` +
					`  - ${normalizedFile}\n` +
					"Переименуйте один из файлов или используйте другой суффикс/структуру источника.",
			)
		}

		icons.set(name, normalizedFile)
	}

	return { icons }
}

/**
 * Проверяет настройки источников иконок на допустимость.
 *
 * @remarks
 * Гарантирует, что задан максимум один `package` source и его шаблон
 * импорта содержит плейсхолдер `{name}`.
 *
 * @param sources - Список настроенных источников иконок
 * @throws Если указано больше одного package source
 * @throws Если `importPattern` package source не содержит `{name}`
 */
const validateSources = (sources: readonly TDubiumIconSource[]): void => {
	const packageSources = sources.filter(
		(source): source is Extract<TDubiumIconSource, { type: "package" }> => source.type === "package",
	)

	if (packageSources.length > 1) {
		throw new Error(
			"[@dubium/icons] Допускается только один package source.\n" +
				`Получено: ${packageSources.length} package sources.\n` +
				"Используйте несколько local sources и один package source как fallback.",
		)
	}

	const packageSource = packageSources[0]

	if (packageSource && !packageSource.importPattern.includes("{name}")) {
		throw new Error(
			"[@dubium/icons] Некорректный importPattern у package source.\n" +
				`Получено: ${JSON.stringify(packageSource.importPattern)}\n` +
				'Шаблон должен содержать "{name}".\n' +
				'Пример: "@dubium/icons/icons/{name}".',
		)
	}
}

/**
 * Генерирует исходный код виртуального модуля с реестром иконок.
 *
 * @param iconNames - Имена иконок для включения в реестр
 * @param localCatalogs - Локальные каталоги для разрешения путей импорта
 * @param packageSource - Package-источник, используемый как fallback
 * @returns Исходный код виртуального модуля
 */
const createVirtualModuleSource = (
	iconNames: readonly string[],
	localCatalogs: readonly ILocalSourceCatalog[],
	packageSource: Extract<TDubiumIconSource, { type: "package" }> | undefined,
): string => {
	const entries: string[] = []

	for (const name of iconNames) {
		let importPath: string | undefined

		for (const catalog of localCatalogs) {
			const localPath = catalog.icons.get(name)

			if (localPath) {
				importPath = localPath
				break
			}
		}

		if (!importPath && packageSource) {
			importPath = packageSource.importPattern.replaceAll("{name}", name)
		}

		if (!importPath) {
			continue
		}

		entries.push(`\t${JSON.stringify(name)}: () => import(${JSON.stringify(importPath)}),`)
	}

	return `/**
	* СГЕНЕРИРОВАНО В ПАМЯТИ плагином @dubium/icons/vite.
	* Содержит только ссылки на иконки, обнаруженные в этом приложении/MF.
	*/
export const iconRegistry = {
${entries.join("\n")}
}
`
}

/**
 * Vite-плагин для compile-time извлечения используемых иконок.
 *
 * @remarks
 * Плагин сканирует JSX/TSX на статические имена у компонента `<Icon>` и другие
 * строковые поля, затем создаёт виртуальный реестр только для найденных имён.
 * Благодаря этому Rollup/Vite видит `import()` только реально используемых
 * иконок, поэтому остальные не попадают в итоговую сборку приложения.
 *
 * JSX-теги внутри комментариев и JavaScript-строк при сканировании
 * компонентов игнорируются.
 *
 * @param options - Настройки плагина
 * @returns Объект Vite-плагина
 *
 * @example
 * ```ts
 * import { dubiumIcons } from "@dubium/icons/vite"
 *
 * export default defineConfig({
 * 	plugins: [dubiumIcons()],
 * })
 * ```
 */
export const dubiumIcons = (options: DubiumIconsPluginOptions = {}): Plugin => {
	const componentNames = options.componentNames?.length ? [...options.componentNames] : ["Icon"]

	const propertyNames = options.propertyNames?.length ? [...options.propertyNames] : []

	const scanDirectories = options.scan?.length ? [...options.scan] : ["src"]

	const sources: readonly TDubiumIconSource[] = options.sources?.length
		? options.sources
		: [
				{
					type: "package",
					importPattern: "@dubium/icons/icons/{name}",
				},
			]

	/**
	 * Проверяем конфигурацию сразу при создании плагина,
	 * чтобы ошибка была понятной и появилась как можно раньше.
	 */
	validateSources(sources)

	const localSourceOptions = sources.filter(
		(source): source is Extract<TDubiumIconSource, { type: "local" }> => source.type === "local",
	)

	const packageSource = sources.find(
		(source): source is Extract<TDubiumIconSource, { type: "package" }> => source.type === "package",
	)

	const fileIcons = new Map<string, Set<string>>()
	const dynamicFiles = new Map<string, number>()

	let localCatalogs: ILocalSourceCatalog[] = []
	let root = process.cwd()
	let server: ViteDevServer | undefined

	/**
	 * Возвращает отсортированный список всех обнаруженных имён иконок.
	 *
	 * @returns Отсортированный массив имён иконок
	 */
	const getAllIcons = (): string[] => {
		const icons = new Set<string>()

		for (const names of fileIcons.values()) {
			for (const name of names) {
				icons.add(name)
			}
		}

		return [...icons].sort((left, right) => left.localeCompare(right))
	}

	/**
	 * Сканирует один файл и обновляет внутренние карты иконок.
	 *
	 * @param file - Путь к файлу
	 * @returns `true`, если состояние иконок изменилось
	 */
	const scanFile = async (file: string): Promise<boolean> => {
		const normalizedFile = normalizePath(file)

		if (!DEFAULT_EXTENSIONS.has(extname(file).toLowerCase())) {
			const hadIcons = fileIcons.delete(normalizedFile)
			const hadDynamicNames = dynamicFiles.delete(normalizedFile)

			return hadIcons || hadDynamicNames
		}

		let source: string

		try {
			source = await readFile(file, "utf8")
		} catch {
			const hadIcons = fileIcons.delete(normalizedFile)
			const hadDynamicNames = dynamicFiles.delete(normalizedFile)

			return hadIcons || hadDynamicNames
		}

		const previousIcons = fileIcons.get(normalizedFile) ?? new Set<string>()
		const previousDynamicNames = dynamicFiles.get(normalizedFile) ?? 0

		const result = scanSource(source, componentNames, propertyNames)

		fileIcons.set(normalizedFile, result.icons)

		if (result.dynamicNames > 0) {
			dynamicFiles.set(normalizedFile, result.dynamicNames)
		} else {
			dynamicFiles.delete(normalizedFile)
		}

		return !setsEqual(previousIcons, result.icons) || previousDynamicNames !== result.dynamicNames
	}

	/**
	 * Сканирует все настроенные директории проекта.
	 *
	 * @param pluginContext - Контекст плагина для регистрации отслеживаемых файлов
	 */
	const scanProject = async (pluginContext?: { addWatchFile: (id: string) => void }): Promise<void> => {
		fileIcons.clear()
		dynamicFiles.clear()

		for (const directory of scanDirectories) {
			const absoluteDirectory = resolve(root, directory)
			const files = await getSourceFiles(absoluteDirectory)

			for (const file of files) {
				pluginContext?.addWatchFile(file)

				await scanFile(file)
			}
		}
	}

	/**
	 * Перестраивает локальные каталоги иконок из настроенных источников.
	 *
	 * @remarks
	 * Пересобирает карты «имя иконки -> путь к компоненту» для каждого local source.
	 */
	const rebuildLocalCatalogs = async (): Promise<void> => {
		localCatalogs = await Promise.all(localSourceOptions.map((source) => buildLocalCatalog(root, source)))
	}

	/**
	 * Проверяет, находится ли путь внутри одного из настроенных local-источников.
	 *
	 * @param file - Путь к файлу
	 * @returns `true`, если файл лежит внутри любого локального источника
	 */
	const isLocalSourcePath = (file: string): boolean =>
		localSourceOptions.some((source) => isPathInsideDirectory(resolve(root, source.path), file))

	/**
	 * Инвалидирует виртуальный модуль и запускает полную перезагрузку dev-сервера.
	 *
	 * @remarks
	 * Выполняет `full-reload` через websocket dev-сервера, поэтому изменения
	 * реестра иконок сразу применяются в браузере.
	 */
	const invalidateVirtualModule = (): void => {
		if (!server) {
			return
		}

		const module = server.moduleGraph.getModuleById(RESOLVED_VIRTUAL_MODULE_ID)

		if (module) {
			server.moduleGraph.invalidateModule(module)
		}

		server.ws.send({
			type: "full-reload",
		})
	}

	return {
		name: "dubium-icons",
		enforce: "pre",

		/**
		 * Сохраняет корень проекта из разрешённой Vite-конфигурации.
		 *
		 * @param config - Разрешённая Vite-конфигурация
		 */
		configResolved(config) {
			root = config.root
		},

		/**
		 * Перестраивает каталоги и сканирует проект перед началом сборки.
		 *
		 * @remarks
		 * Предупреждает о найденных динамических `<Icon name={...}>`,
		 * которые не могут быть извлечены на этапе компиляции.
		 */
		async buildStart() {
			await rebuildLocalCatalogs()
			await scanProject(this)

			if (dynamicFiles.size > 0) {
				const details = [...dynamicFiles.entries()]
					.map(([file, count]) => `  - ${normalizePath(relative(root, file))}: ${count}`)
					.join("\n")

				this.warn(
					`[@dubium/icons] Найдены динамические <Icon name={...}>:\n${details}\n` +
						"Для MF/EventBus это допустимо, если loader регистрируется remote через runtime registry.",
				)
			}
		},

		/**
		 * Настраивает watcher dev-сервера для отслеживания изменений в проекте.
		 *
		 * @remarks
		 * Дополнительно следит за каталогами local-источников, чтобы вовремя
		 * перестраивать каталоги иконок при изменении структуры файлов.
		 *
		 * @param devServer - Экземпляр dev-сервера Vite
		 */
		configureServer(devServer) {
			server = devServer

			for (const source of localSourceOptions) {
				devServer.watcher.add(resolve(root, source.path))
			}

			/**
			 * Обрабатывает добавление или удаление файлов и директорий.
			 *
			 * @remarks
			 * Изменение внутри local source перестраивает каталоги;
			 * остальные изменения приводят к пересканированию файла.
			 *
			 * @param file - Путь к изменённому файлу или директории
			 */
			const onStructureChange = async (file: string): Promise<void> => {
				const localSourceChanged = isLocalSourcePath(file)
				const scanChanged = await scanFile(file)

				if (localSourceChanged) {
					await rebuildLocalCatalogs()
					invalidateVirtualModule()
					return
				}

				if (scanChanged) {
					invalidateVirtualModule()
				}
			}

			devServer.watcher.on("add", onStructureChange)
			devServer.watcher.on("unlink", onStructureChange)
			devServer.watcher.on("addDir", onStructureChange)
			devServer.watcher.on("unlinkDir", onStructureChange)

			devServer.httpServer?.once("close", () => {
				devServer.watcher.off("add", onStructureChange)
				devServer.watcher.off("unlink", onStructureChange)
				devServer.watcher.off("addDir", onStructureChange)
				devServer.watcher.off("unlinkDir", onStructureChange)
			})
		},

		/**
		 * Резолвит публичный идентификатор виртуального модуля в защищённый.
		 *
		 * @param id - Идентификатор модуля, запрошенный из исходного кода
		 * @returns Защищённый идентификатор модуля или `null`
		 */
		resolveId(id) {
			if (id === VIRTUAL_MODULE_ID) {
				return RESOLVED_VIRTUAL_MODULE_ID
			}

			return null
		},

		/**
		 * Загружает исходный код виртуального модуля с реестром иконок.
		 *
		 * @param id - Идентификатор модуля
		 * @returns Исходный код модуля или `null`
		 */
		load(id) {
			if (id !== RESOLVED_VIRTUAL_MODULE_ID) {
				return null
			}

			return createVirtualModuleSource(getAllIcons(), localCatalogs, packageSource)
		},

		/**
		 * Пересканирует изменённый файл и инвалидирует модуль при изменении иконок.
		 *
		 * @param context - Контекст hot update
		 * @returns Пустой массив изменений, так как обновление выполняется перезагрузкой
		 */
		async handleHotUpdate(context) {
			const changed = await scanFile(context.file)

			if (!changed) {
				return
			}

			invalidateVirtualModule()

			return []
		},
	}
}

export default dubiumIcons
