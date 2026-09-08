import { readFile } from "node:fs/promises"
import { extname, relative, resolve } from "node:path"

import type { Plugin, ViteDevServer } from "vite"

import { scanSource } from "./scanner/index.js"
import {
	buildLocalCatalog,
	DEFAULT_EXTENSIONS,
	getSourceFiles,
	isPathInsideDirectory,
	normalizePath,
	validateSources,
} from "./sources/index.js"
import type { ILocalSourceCatalog } from "./sources/index.js"
import { createVirtualModuleSource, RESOLVED_VIRTUAL_MODULE_ID, VIRTUAL_MODULE_ID } from "./virtual/index.js"
import type { DubiumIconsPluginOptions, TDubiumIconSource } from "./plugin.types.js"

/**
 * Поля, которые scanner автоматически считает ссылками на иконки,
 * когда включена публикация в runtime registry.
 *
 * @remarks
 * `iconName` выбран специально: поле достаточно специфичное и не должно
 * конфликтовать с большинством обычных объектов приложения.
 */
const DEFAULT_RUNTIME_PROPERTY_NAMES = ["iconName"] as const

/**
 * Проверяет эквивалентность двух множеств строк.
 *
 * @remarks
 * Множества считаются эквивалентными, если имеют одинаковый размер и содержат
 * одни и те же значения. Порядок элементов не важен.
 *
 * @param left - Первое сравниваемое множество
 * @param right - Второе сравниваемое множество
 * @returns `true`, если множества эквивалентны
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
 * Удаляет query/hash-часть из Vite module id.
 *
 * @param id - Идентификатор модуля Vite
 * @returns Путь к исходному файлу без служебных параметров
 */
const getModuleFilePath = (id: string): string => {
	const queryIndex = id.indexOf("?")
	const hashIndex = id.indexOf("#")

	let endIndex = id.length

	if (queryIndex !== -1) {
		endIndex = Math.min(endIndex, queryIndex)
	}

	if (hashIndex !== -1) {
		endIndex = Math.min(endIndex, hashIndex)
	}

	return id.slice(0, endIndex)
}

/**
 * Плагин Vite для автоматического обнаружения иконок `@dubium/icons`.
 *
 * @remarks
 * Плагин сканирует исходники проекта, находит статические использования
 * Vite-компонента `Icon` и строковые конфигурации, после чего генерирует
 * виртуальный модуль `virtual:@dubium/icons-registry` с ленивыми загрузчиками
 * только для используемых иконок.
 *
 * Дополнительно:
 *
 * - `include` позволяет явно добавить динамические имена в compile-time registry;
 * - `runtimeRegistry` публикует итоговый compile-time registry в общий runtime registry.
 *
 * При `runtimeRegistry` поле `iconName` сканируется автоматически.
 *
 * @param options - Опции плагина
 * @returns Объект плагина Vite
 *
 * @example
 *
 * ```ts
 * // Host: динамические имена заранее известны Host.
 * dubiumIcons({
 * 	include: ["AiOutline", "AlertCircleOutline"],
 * })
 * ```
 *
 * @example
 *
 * ```ts
 * // Remote: имена автоматически публикуются в runtime registry.
 * dubiumIcons({
 * 	runtimeRegistry: "profile-mf",
 * })
 * ```
 */
export const dubiumIcons = (options: DubiumIconsPluginOptions = {}): Plugin => {
	const componentNames = options.componentNames ? [...options.componentNames] : []

	const runtimeRegistryOwner = options.runtimeRegistry?.trim()

	if (options.runtimeRegistry !== undefined && !runtimeRegistryOwner) {
		throw new Error(
			"[@dubium/icons] options.runtimeRegistry должен содержать непустой уникальный owner микрофронтенда.",
		)
	}

	const propertyNames = [
		...new Set([...(runtimeRegistryOwner ? DEFAULT_RUNTIME_PROPERTY_NAMES : []), ...(options.propertyNames ?? [])]),
	]

	const includedIcons = [...new Set(options.include ?? [])]

	for (const name of includedIcons) {
		if (!name.trim() || name !== name.trim()) {
			throw new Error(
				`[@dubium/icons] Некорректное имя в options.include: ${JSON.stringify(name)}.\n` +
					"Имя иконки должно быть непустой строкой без пробелов по краям.",
			)
		}
	}

	const scanDirectories = options.scan ? [...options.scan] : ["src"]

	const sources: readonly TDubiumIconSource[] = options.sources
		? [...options.sources]
		: [
				{
					type: "package",
					importPattern: "@dubium/icons/icons/{name}",
				},
			]

	validateSources(sources)

	const localSourceOptions = sources.filter(
		(source): source is Extract<TDubiumIconSource, { type: "local" }> => source.type === "local",
	)

	const packageSource = sources.find(
		(source): source is Extract<TDubiumIconSource, { type: "package" }> => source.type === "package",
	)

	/**
	 * Статические иконки, найденные scanner-ом, сгруппированные по исходным файлам.
	 */
	const fileIcons = new Map<string, Set<string>>()

	/**
	 * Количество динамических `<Icon name={...}>` по исходным файлам.
	 */
	const dynamicFiles = new Map<string, number>()

	let localCatalogs: ILocalSourceCatalog[] = []
	let root = process.cwd()
	let server: ViteDevServer | undefined

	/**
	 * Сигнатура последнего предупреждения о динамических именах иконок.
	 *
	 * @remarks
	 * Используется для дедупликации одинаковых предупреждений при HMR.
	 */
	let lastDynamicWarningSignature = ""

	/**
	 * Собирает отсортированный список имён, найденных scanner-ом.
	 *
	 * @returns Уникальные scanner-имена, отсортированные по алфавиту
	 */
	const getScannedIcons = (): string[] => {
		const icons = new Set<string>()

		for (const names of fileIcons.values()) {
			for (const name of names) {
				icons.add(name)
			}
		}

		return [...icons].sort((left, right) => left.localeCompare(right))
	}

	/**
	 * Собирает итоговый список имён для compile-time registry.
	 *
	 * @remarks
	 * Итоговый registry состоит из scanner-result и `options.include`.
	 *
	 * @returns Уникальные имена, отсортированные по алфавиту
	 */
	const getAllIcons = (): string[] => {
		const icons = new Set(getScannedIcons())

		for (const name of includedIcons) {
			icons.add(name)
		}

		return [...icons].sort((left, right) => left.localeCompare(right))
	}

	/**
	 * Сканирует один файл и обновляет кэши иконок и динамических имён.
	 *
	 * @remarks
	 * Файлы с расширением вне `DEFAULT_EXTENSIONS` и недоступные для чтения файлы
	 * удаляются из кэшей. Новый результат сравнивается с предыдущим состоянием.
	 *
	 * @param file - Абсолютный путь к файлу
	 * @param readSource - Опциональная функция чтения содержимого файла
	 * @returns `true`, если набор иконок или число динамических имён изменились
	 */
	const scanFile = async (file: string, readSource?: () => string | Promise<string>): Promise<boolean> => {
		const normalizedFile = normalizePath(file)

		if (!DEFAULT_EXTENSIONS.has(extname(file).toLowerCase())) {
			const hadIcons = fileIcons.delete(normalizedFile)
			const hadDynamicNames = dynamicFiles.delete(normalizedFile)

			return hadIcons || hadDynamicNames
		}

		let source: string

		try {
			source = readSource ? await readSource() : await readFile(file, "utf8")
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
	 * Сканирует все директории из `options.scan` и наполняет кэши иконок.
	 *
	 * @param pluginContext - Контекст хука Vite (опционально)
	 */
	const scanProject = async (pluginContext?: {
		addWatchFile: (id: string) => void
		warn: (message: string) => void
	}): Promise<void> => {
		fileIcons.clear()
		dynamicFiles.clear()

		for (const directory of scanDirectories) {
			const absoluteDirectory = resolve(root, directory)

			let files: string[]

			try {
				files = await getSourceFiles(absoluteDirectory)
			} catch {
				pluginContext?.warn(
					`[@dubium/icons] Директория для сканирования недоступна: "${directory}".\n` +
						"Проверьте options.scan, существование пути и права доступа.",
				)

				continue
			}

			for (const file of files) {
				pluginContext?.addWatchFile(file)

				await scanFile(file)
			}
		}
	}

	/**
	 * Пересобирает каталоги локальных источников иконок.
	 */
	const rebuildLocalCatalogs = async (): Promise<void> => {
		localCatalogs = await Promise.all(localSourceOptions.map((source) => buildLocalCatalog(root, source)))
	}

	/**
	 * Проверяет, находится ли файл внутри директории локального источника иконок.
	 *
	 * @param file - Абсолютный путь к файлу
	 * @returns `true`, если файл принадлежит хотя бы одному локальному источнику
	 */
	const isLocalSourcePath = (file: string): boolean => {
		return localSourceOptions.some((source) => isPathInsideDirectory(resolve(root, source.path), file))
	}

	/**
	 * Проверяет, входит ли файл хотя бы в одну директорию из `options.scan`.
	 *
	 * @param file - Абсолютный путь к файлу
	 * @returns `true`, если файл должен участвовать в сканировании приложения
	 */
	const isScanPath = (file: string): boolean => {
		return scanDirectories.some((directory) => isPathInsideDirectory(resolve(root, directory), file))
	}

	/**
	 * Инвалидирует виртуальный модуль реестра и запрашивает полную перезагрузку страницы.
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

	/**
	 * Выводит предупреждение о динамических именах `<Icon name={...}>`.
	 *
	 * @param warn - Функция вывода предупреждения
	 */
	const warnAboutDynamicIcons = (warn: (message: string) => void): void => {
		if (dynamicFiles.size === 0) {
			lastDynamicWarningSignature = ""
			return
		}

		const details = [...dynamicFiles.entries()]
			.sort(([left], [right]) => left.localeCompare(right))
			.map(([file, count]) => `  - ${normalizePath(relative(root, file))}: ${count}`)
			.join("\n")

		if (details === lastDynamicWarningSignature) {
			return
		}

		lastDynamicWarningSignature = details

		const runtimeHint = runtimeRegistryOwner
			? "runtimeRegistry публикует только имена, найденные scanner-ом или добавленные в options.include. " +
				'Для EventBus используйте поле iconName: "..." или добавьте своё поле в options.propertyNames.'
			: "Если возможные значения известны текущему приложению, добавьте их в options.include. " +
				"Для MF Remote можно включить options.runtimeRegistry."

		warn(`[@dubium/icons] Найдены динамические <Icon name={...}>:\n${details}\n${runtimeHint}`)
	}

	return {
		name: "dubium-icons",
		enforce: "pre",

		/**
		 * Запоминает корень проекта из итоговой конфигурации Vite.
		 */
		configResolved(config) {
			root = config.root
		},

		/**
		 * При старте сборки пересобирает локальные каталоги и сканирует проект.
		 */
		async buildStart() {
			await rebuildLocalCatalogs()
			await scanProject(this)

			warnAboutDynamicIcons((message) => this.warn(message))
		},

		/**
		 * Автоматически подключает virtual registry в исполняемый код Remote.
		 *
		 * @remarks
		 * Side-effect import добавляется в исходные модули приложения,
		 * если включён `runtimeRegistry` и итоговый registry не пуст.
		 *
		 * Virtual module является singleton-модулем в module graph,
		 * поэтому даже при нескольких импортирующих файлах runtime-регистрация
		 * выполняется один раз на конкретную загрузку module graph.
		 *
		 * Такой подход не зависит от конкретной реализации Module Federation
		 * и не требует отдельного bootstrap-вызова `registerIcons()`.
		 */
		transform(code, id) {
			if (!runtimeRegistryOwner || getAllIcons().length === 0) {
				return null
			}

			const file = getModuleFilePath(id)

			if (!isScanPath(file) || !DEFAULT_EXTENSIONS.has(extname(file).toLowerCase())) {
				return null
			}

			if (code.includes(VIRTUAL_MODULE_ID)) {
				return null
			}

			return {
				code: `import ${JSON.stringify(VIRTUAL_MODULE_ID)};\n${code}`,
				map: null,
			}
		},

		/**
		 * Настраивает отслеживание изменений структуры файлов в dev-режиме.
		 */
		configureServer(devServer) {
			server = devServer

			for (const source of localSourceOptions) {
				devServer.watcher.add(resolve(root, source.path))
			}

			const onStructureChange = async (file: string): Promise<void> => {
				const localSourceChanged = isLocalSourcePath(file)
				const scanChanged = isScanPath(file) ? await scanFile(file) : false

				const notifyChanges = (): void => {
					invalidateVirtualModule()

					warnAboutDynamicIcons((message) => {
						server?.config.logger.warn(message)
					})
				}

				if (localSourceChanged) {
					await rebuildLocalCatalogs()
					notifyChanges()
					return
				}

				if (scanChanged) {
					notifyChanges()
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
		 * Резолвит публичный идентификатор виртуального модуля во внутренний идентификатор Vite.
		 */
		resolveId(id) {
			if (id === VIRTUAL_MODULE_ID) {
				return RESOLVED_VIRTUAL_MODULE_ID
			}

			return null
		},

		/**
		 * Генерирует исходный код virtual registry.
		 *
		 * @remarks
		 * Compile-time registry содержит scanner-result + `include`.
		 *
		 * Если включён `runtimeRegistry`, весь compile-time registry
		 * (scanner-result + `include`) дополнительно публикуется
		 * в общий runtime registry под указанным owner.
		 */
		load(id) {
			if (id !== RESOLVED_VIRTUAL_MODULE_ID) {
				return null
			}

			const allIcons = getAllIcons()

			return createVirtualModuleSource(
				allIcons,
				localCatalogs,
				packageSource,
				(importPath) => this.resolve(importPath),
				runtimeRegistryOwner
					? {
							owner: runtimeRegistryOwner,
							iconNames: allIcons,
						}
					: undefined,
			)
		},

		/**
		 * Обрабатывает изменение файла в dev-режиме.
		 */
		async handleHotUpdate(context) {
			if (!isScanPath(context.file)) {
				return
			}

			const changed = await scanFile(context.file, context.read)

			if (!changed) {
				return
			}

			invalidateVirtualModule()

			warnAboutDynamicIcons((message) => this.warn(message))

			return []
		},
	}
}
