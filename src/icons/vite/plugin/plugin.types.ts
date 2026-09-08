import type { TPackageIconName } from "../icon/Icon.types.js"

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
			 * `UserOutlineIcon.tsx` при suffix `Icon` даёт имя `UserOutline`.
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
 * Имя иконки, которое можно явно добавить в compile-time registry.
 *
 * @remarks
 * `TPackageIconName` даёт autocomplete встроенной коллекции.
 * Дополнительная строковая часть оставляет возможность использовать
 * пользовательские `local` sources.
 */
export type TDubiumIconIncludeName = TPackageIconName | (string & Record<never, never>)

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
	 * Явный список иконок, которые нужно добавить в compile-time registry,
	 * даже если scanner не нашёл их в исходниках.
	 *
	 * @remarks
	 * Используйте `include`, когда текущее приложение рендерит динамическое имя:
	 *
	 * ```tsx
	 * <Icon name={event.iconName} />
	 * ```
	 *
	 * и возможные значения известны заранее.
	 *
	 * Для каждого имени создаётся отдельный lazy `import()`.
	 *
	 * @default []
	 */
	include?: readonly TDubiumIconIncludeName[]

	/**
	 * Дополнительные строковые поля, которые считаются ссылками на иконки.
	 *
	 * @remarks
	 * Если включён `runtimeRegistry`, поле `iconName` сканируется автоматически.
	 * Здесь можно добавить собственные поля, например `notificationIcon`.
	 *
	 * Поле `name` можно указать вручную, но оно очень общее и может совпадать
	 * с другими объектами приложения.
	 *
	 * @default []
	 */
	propertyNames?: readonly string[]

	/**
	 * Публикует compile-time registry текущего приложения/MF
	 * в общий runtime registry.
	 *
	 * @remarks
	 * Значение — уникальный owner микрофронтенда.
	 *
	 * После включения достаточно передавать через EventBus строковое имя:
	 *
	 * ```ts
	 * eventBus.emit("notification", {
	 * 	iconName: "AiOutline",
	 * })
	 * ```
	 *
	 * Scanner автоматически найдёт `iconName: "AiOutline"`, plugin создаст
	 * lazy loader и зарегистрирует его в общем runtime registry.
	 *
	 * В runtime registry публикуются как scanner-detected имена,
	 * так и имена из `include`.
	 *
	 * Host сможет отрисовать:
	 *
	 * ```tsx
	 * <Icon name={event.iconName} />
	 * ```
	 *
	 * без ручного `registerIcons()` и без перечисления иконок в `vite.config.ts`.
	 *
	 * @example
	 * ```ts
	 * dubiumIcons({
	 * 	runtimeRegistry: "profile-mf",
	 * })
	 * ```
	 */
	runtimeRegistry?: string

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
