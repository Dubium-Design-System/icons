/**
 * Источник, из которого разрешаются имена иконок.
 *
 * @remarks
 * Поддерживается два варианта: локальный каталог компонентов (`local`)
 * и fallback-шаблон импорта из npm-пакета (`package`).
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
	 * Дополнительные имена JSX-компонентов, которые scanner должен считать
	 * компонентами иконок независимо от import source.
	 *
	 * @remarks
	 * Обычный `Icon` из `@dubium/icons/vite` определяется автоматически,
	 * включая alias. Эту настройку следует использовать только для собственных
	 * обёрток или нестандартных компонентов.
	 *
	 * @default []
	 */
	componentNames?: readonly string[]

	/**
	 * Дополнительные строковые поля, которые считаются ссылками на иконки.
	 *
	 * @remarks
	 * Пустой массив отключает сканирование дополнительных свойств.
	 *
	 * @default []
	 */
	propertyNames?: readonly string[]

	/**
	 * Директории проекта, которые нужно сканировать.
	 *
	 * @remarks
	 * Пустой массив полностью отключает сканирование директорий.
	 *
	 * @default ["src"]
	 */
	scan?: readonly string[]

	/**
	 * Источники иконок.
	 *
	 * @remarks
	 * Можно указать несколько `local` sources; они проверяются сверху вниз.
	 * Дополнительно можно указать максимум один `package` source,
	 * который используется как fallback.
	 *
	 * Пустой массив означает, что автоматические источники
	 * иконок использоваться не будут.
	 *
	 * @example
	 * ```ts
	 * dubiumIcons({
	 * 	sources: [
	 * 		{ type: "local", path: "src/icons" },
	 * 		{ type: "package", importPattern: "@dubium/icons/icons/{name}" },
	 * 	],
	 * })
	 * ```
	 */
	sources?: readonly TDubiumIconSource[]
}
