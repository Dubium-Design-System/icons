import { posix } from "node:path"

import type { Plugin } from "vite"

import type { FixFederationCssOptions } from "./federation.types.js"

/**
 * Имя плагина, которое Vite использует в логах и при отладке.
 */
const PLUGIN_NAME = "dubium-icons:fix-federation-css"

/**
 * Создаёт Vite-плагин для исправления CSS-плейсхолдеров OriginJS
 * в итоговом `remoteEntry`.
 *
 * @remarks
 * Иногда `@originjs/vite-plugin-federation` оставляет в `remoteEntry.js`
 * строковые CSS-плейсхолдеры вместо массива CSS-файлов.
 *
 * Например:
 *
 * ```js
 * dynamicLoadingCss("__v__css__/src/RemotePanel.tsx", false, "./RemotePanel")
 * ```
 *
 * Этот плагин заменяет такой плейсхолдер на массив CSS-файлов
 * из текущего Vite bundle:
 *
 * ```js
 * dynamicLoadingCss(["style-AbC123.css"], false, "./RemotePanel")
 * ```
 *
 * Плагин:
 *
 * - подключается только в Remote-приложении;
 * - подключается отдельно от `dubiumIcons()`;
 * - должен идти после `federation(...)`;
 * - требует `build.cssCodeSplit: false`;
 * - работает до записи файлов на диск;
 * - работает также при `vite build --watch`.
 *
 * @param options - Настройки исправления CSS для Module Federation.
 * @returns Vite-плагин, который нужно добавить в массив `plugins`.
 *
 * @throws
 * Выбрасывает ошибку, если `remoteEntry` содержит некорректный путь.
 *
 * @throws
 * Выбрасывает ошибку, если `build.cssCodeSplit` не равен `false`.
 *
 * @example
 * Стандартный `remoteEntry.js`:
 *
 * ```ts
 * fixFederationCss()
 * ```
 *
 * @example
 * Remote Entry с другим именем:
 *
 * ```ts
 * fixFederationCss({
 *   remoteEntry: "iconsRemote.js",
 * })
 * ```
 *
 * @example
 * Remote Entry внутри директории:
 *
 * ```ts
 * fixFederationCss({
 *   remoteEntry: "assets/iconsRemote.js",
 * })
 * ```
 */
export const fixFederationCss = (options: FixFederationCssOptions = {}): Plugin => {
	/**
	 * Нормализованный путь к Remote Entry.
	 *
	 * По умолчанию используется `remoteEntry.js`.
	 *
	 * Windows-разделители `\` заменяются на `/`, чтобы дальнейшие
	 * сравнения путей одинаково работали на разных операционных системах.
	 *
	 * Начальный `./` также удаляется, потому что имена файлов внутри
	 * Vite bundle хранятся относительно `build.outDir`.
	 */
	const remoteEntry = (options.remoteEntry ?? "remoteEntry.js").replaceAll("\\", "/").replace(/^\.\//u, "")

	/**
	 * Проверяем, что `remoteEntry` является безопасным относительным
	 * путём внутри `build.outDir`.
	 *
	 * Запрещены:
	 *
	 * - пустая строка;
	 * - абсолютные пути;
	 * - URL и другие строки со схемой;
	 * - путь, заканчивающийся на `/`;
	 * - переходы в родительские директории через `..`.
	 */
	if (
		!remoteEntry.trim() ||
		posix.isAbsolute(remoteEntry) ||
		/^[a-z][a-z\d+.-]*:/iu.test(remoteEntry) ||
		remoteEntry.endsWith("/") ||
		remoteEntry.split("/").includes("..")
	) {
		throw new Error(`[${PLUGIN_NAME}] remoteEntry должен быть именем файла или путём относительно build.outDir.`)
	}

	/**
	 * Определяет способ поиска Remote Entry в Vite bundle.
	 *
	 * Если пользователь передал только имя файла:
	 *
	 * ```text
	 * remoteEntry.js
	 * ```
	 *
	 * файл ищется по имени независимо от директории.
	 *
	 * Если передан путь:
	 *
	 * ```text
	 * assets/remoteEntry.js
	 * ```
	 *
	 * требуется точное совпадение всего относительного пути.
	 */
	const matchFullPath = remoteEntry.includes("/")

	return {
		/**
		 * Имя Vite-плагина.
		 */
		name: PLUGIN_NAME,

		/**
		 * Плагин нужен только во время production-сборки.
		 *
		 * При запуске Vite dev server он не применяется.
		 */
		apply: "build",

		/**
		 * Запускаем плагин после обычных Vite-плагинов.
		 *
		 * Это важно, потому что сначала OriginJS должен сформировать
		 * содержимое `remoteEntry`, которое затем будет исправлено здесь.
		 */
		enforce: "post",

		/**
		 * Проверяет итоговую конфигурацию Vite перед началом сборки.
		 *
		 * @param config - Полностью разрешённая конфигурация Vite.
		 */
		configResolved(config) {
			/**
			 * Текущая реализация рассчитана на один общий CSS-файл Remote.
			 *
			 * При `cssCodeSplit: true` Vite может создавать несколько
			 * независимых CSS-chunks, и определить соответствие между ними
			 * и конкретными exposed-модулями этим алгоритмом нельзя.
			 */
			if (config.build.cssCodeSplit !== false) {
				throw new Error(
					`[${PLUGIN_NAME}] Укажите build.cssCodeSplit: false. ` +
						"Плагин использует общий CSS-bundle Remote; раздельные CSS-chunks не поддерживаются.",
				)
			}
		},

		/**
		 * Изменяет содержимое bundle после его формирования,
		 * но до записи файлов на диск.
		 */
		generateBundle: {
			/**
			 * Выполняем handler после других `generateBundle` hooks.
			 *
			 * Это позволяет работать уже с финальным вариантом
			 * `remoteEntry`, созданным Module Federation.
			 */
			order: "post",

			/**
			 * Находит CSS-файлы в bundle и подставляет их вместо
			 * CSS-плейсхолдеров в Remote Entry.
			 *
			 * @param _options - Настройки выходной сборки Rollup.
			 * Не используются внутри плагина.
			 * @param bundle - Все chunks и assets текущей сборки.
			 */
			handler(_options, bundle) {
				/**
				 * Список всех CSS-файлов текущего bundle.
				 *
				 * Здесь учитываются только assets с расширением `.css`.
				 * Пути нормализуются в POSIX-формат и сортируются,
				 * чтобы результат был стабильным между сборками.
				 */
				const cssFiles = Object.values(bundle)
					.filter((output) => output.type === "asset" && output.fileName.endsWith(".css"))
					.map((output) => output.fileName.replaceAll("\\", "/"))
					.sort()

				/**
				 * Перебираем все файлы bundle и ищем нужный Remote Entry.
				 */
				for (const output of Object.values(bundle)) {
					/**
					 * JavaScript Remote Entry является Rollup chunk.
					 *
					 * Остальные assets, например CSS или изображения,
					 * здесь не нужны.
					 */
					if (output.type !== "chunk") {
						continue
					}

					/**
					 * Нормализованное имя текущего JavaScript-файла.
					 */
					const fileName = output.fileName.replaceAll("\\", "/")

					/**
					 * Проверяем, является ли текущий chunk нужным Remote Entry.
					 *
					 * При переданном полном относительном пути требуется
					 * точное совпадение.
					 *
					 * При переданном только имени сравнивается basename файла.
					 */
					const matches = matchFullPath ? fileName === remoteEntry : posix.basename(fileName) === remoteEntry

					if (!matches) {
						continue
					}

					/**
					 * Формируем CSS-пути относительно директории,
					 * в которой расположен Remote Entry.
					 *
					 * Например:
					 *
					 * Remote Entry:
					 *
					 * ```text
					 * assets/remoteEntry.js
					 * ```
					 *
					 * CSS:
					 *
					 * ```text
					 * assets/style-AbC123.css
					 * ```
					 *
					 * Результат:
					 *
					 * ```text
					 * style-AbC123.css
					 * ```
					 *
					 * Если CSS-файлов в bundle нет, получится пустой массив.
					 */
					const styles = cssFiles.map((cssFile) => posix.relative(posix.dirname(fileName), cssFile))

					/**
					 * Заменяем оставшиеся CSS-плейсхолдеры OriginJS
					 * на JSON-массив реальных CSS-файлов.
					 *
					 * Регулярное выражение поддерживает строки в:
					 *
					 * - одинарных кавычках;
					 * - двойных кавычках;
					 * - обратных кавычках.
					 *
					 * Также учитываются экранированные символы
					 * и обратные слеши внутри строки.
					 *
					 * `JSON.stringify(styles)` создаёт корректный
					 * JavaScript-массив, например:
					 *
					 * ```js
					 * ["style-AbC123.css"]
					 * ```
					 */
					output.code = output.code.replace(/([`'"])__v__css__\/(?:\\[\s\S]|(?!\1)[^\\])*\1/gu, () =>
						JSON.stringify(styles),
					)
				}
			},
		},
	}
}
