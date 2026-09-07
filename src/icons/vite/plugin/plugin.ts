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
 * Плагин Vite для автоматического обнаружения иконок `@dubium/icons`.
 *
 * @remarks
 * Плагин сканирует исходники проекта, находит статические использования
 * Vite-компонента `Icon` (в виде JSX-тегов и строковых конфигураций) и генерирует
 * виртуальный модуль `virtual:@dubium/icons-registry` с ленивыми загрузчиками
 * только для используемых иконок.
 *
 * По умолчанию компонентом считается любой JSX-тег `<Icon>`, имя которого
 * импортировано из `@dubium/icons/vite`. Набор имён можно переопределить через
 * `options.componentNames`, а список свойств, значения которых трактуются как имена
 * иконок, — через `options.propertyNames`. Теги прочих компонентов, например
 * `<IconButton>`, игнорируются.
 *
 * Сканируются все файлы директории `src` (настраивается через `options.scan`).
 * Источником иконок по умолчанию является пакет `@dubium/icons` с подстановкой
 * имени в `importPattern`; локальные каталоги SVG-файлов подключаются через
 * `options.sources`.
 *
 * Динамические имена вида `<Icon name={expression}>` не могут быть разрешены
 * на этапе сборки — о них выводится предупреждение с указанием файлов.
 *
 * @param options - Опции плагина
 * @returns Объект плагина Vite
 *
 * @example
 *
 * ```ts
 * // vite.config.ts
 * import { defineConfig } from "vite"
 * import { dubiumIcons } from "@dubium/icons/vite/plugin"
 *
 * export default defineConfig({
 *   plugins: [dubiumIcons()],
 * })
 * ```
 */
export const dubiumIcons = (options: DubiumIconsPluginOptions = {}): Plugin => {
	const componentNames = options.componentNames ? [...options.componentNames] : []

	const propertyNames = options.propertyNames ? [...options.propertyNames] : []

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

	const fileIcons = new Map<string, Set<string>>()
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
	 * Собирает отсортированный список всех статических имён иконок из отсканированных файлов.
	 *
	 * @remarks
	 * Имена объединяются из кэша `fileIcons` без дубликатов и сортируются
	 * в порядке `localeCompare`.
	 *
	 * @returns Уникальные имена иконок, отсортированные по алфавиту
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
	 * Сканирует один файл и обновляет кэши иконок и динамических имён.
	 *
	 * @remarks
	 * Файлы с расширением вне `DEFAULT_EXTENSIONS` и недоступные для чтения файлы
	 * удаляются из кэшей. Новый результат сравнивается с предыдущим состоянием.
	 *
	 * @param file - Абсолютный путь к файлу
	 * @returns `true`, если набор иконок или число динамических имён изменились
	 */
	const scanFile = async (
		file: string,
		readSource?: () => string | Promise<string>,
	): Promise<boolean> => {
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
	 * @remarks
	 * Перед сканированием кэши очищаются. Недоступная директория не прерывает работу —
	 * вместо этого через `pluginContext.warn` выдаётся предупреждение, после чего плагин
	 * переходит к следующей директории.
	 *
	 * @param pluginContext - Контекст хука Vite (опционально)
	 * @param pluginContext.addWatchFile - Регистрирует файл для отслеживания изменений
	 * @param pluginContext.warn - Выводит предупреждение в лог
	 * @returns Промис, завершающийся после обработки всех директорий
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
	 *
	 * @remarks
	 * Каталоги строятся для всех источников с типом `local` из `options.sources`.
	 * Каждый каталог связывает имя иконки с путём к её SVG-файлу.
	 *
	 * @returns Промис, завершающийся после построения всех каталогов
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
	const isLocalSourcePath = (file: string): boolean =>
		localSourceOptions.some((source) => isPathInsideDirectory(resolve(root, source.path), file))

	/**
	 * Проверяет, входит ли файл хотя бы в одну директорию из `options.scan`.
	 *
	 * @param file - Абсолютный путь к файлу
	 * @returns `true`, если файл должен участвовать в сканировании приложения
	 */
	const isScanPath = (file: string): boolean =>
		scanDirectories.some((directory) => isPathInsideDirectory(resolve(root, directory), file))

	/**
	 * Инвалидирует виртуальный модуль реестра и запрашивает полную перезагрузку страницы.
	 *
	 * @remarks
	 * Вызывается после изменения набора иконок в dev-режиме. Если dev-сервер ещё
	 * не запущен, вызов игнорируется.
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
	 * @remarks
	 * Одинаковое состояние dynamic usages повторно не логируется.
	 * Если все динамические использования исчезли, сигнатура сбрасывается.
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

		warn(
			`[@dubium/icons] Найдены динамические <Icon name={...}>:\n${details}\n` +
				"Для MF/EventBus это допустимо, если loader регистрируется remote через runtime registry.",
		)
	}

	return {
		name: "dubium-icons",
		enforce: "pre",

		/**
		 * Запоминает корень проекта из итоговой конфигурации Vite.
		 *
		 * @remarks
		 * Корень используется для резолва относительных путей в `options.scan`
		 * и `options.sources`.
		 */
		configResolved(config) {
			root = config.root
		},

		/**
		 * При старте сборки пересобирает локальные каталоги и сканирует проект.
		 *
		 * @remarks
		 * После сканирования выводит предупреждение о динамических именах иконок,
		 * если такие использования найдены.
		 */
		async buildStart() {
			await rebuildLocalCatalogs()
			await scanProject(this)

			warnAboutDynamicIcons((message) => this.warn(message))
		},

		/**
		 * Настраивает отслеживание изменений структуры файлов в dev-режиме.
		 *
		 * @remarks
		 * Добавляет директории локальных источников в watcher и подписывается на
		 * создание и удаление файлов и директорий. Подписка снимается при закрытии
		 * HTTP-сервера.
		 */
		configureServer(devServer) {
			server = devServer

			for (const source of localSourceOptions) {
				devServer.watcher.add(resolve(root, source.path))
			}

			/**
			 * Обрабатывает добавление или удаление файла/директории в dev-режиме.
			 *
			 * @remarks
			 * Если изменился локальный источник, пересобираются каталоги. Если изменился
			 * набор иконок или число динамических имён, виртуальный модуль инвалидируется
			 * и повторно выводится предупреждение о динамических именах.
			 */
			const onStructureChange = async (file: string): Promise<void> => {
				const localSourceChanged = isLocalSourcePath(file)
				const scanChanged = isScanPath(file) ? await scanFile(file) : false

				/**
				 * Инвалидирует виртуальный модуль и выводит предупреждение о динамических именах.
				 */
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
		 * Генерирует исходный код виртуального модуля реестра иконок.
		 *
		 * @remarks
		 * Модуль содержит ленивые загрузчики для всех найденных иконок, каталоги
		 * локальных источников и описание package-источника. Пути импортов проверяются
		 * через резолвер Vite.
		 */
		load(id) {
			if (id !== RESOLVED_VIRTUAL_MODULE_ID) {
				return null
			}

			return createVirtualModuleSource(getAllIcons(), localCatalogs, packageSource, (importPath) =>
				this.resolve(importPath),
			)
		},

		/**
		 * Обрабатывает изменение файла в dev-режиме.
		 *
		 * @remarks
		 * Пересканирует изменённый файл только если он входит в `options.scan`.
		 * Для чтения использует `context.read()`, чтобы избежать race condition при сохранении.
		 * Если набор иконок изменился, инвалидирует виртуальный модуль и возвращает пустой
		 * массив, отключая точечное HMR-обновление
		 * затронутых модулей в пользу полной перезагрузки.
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
