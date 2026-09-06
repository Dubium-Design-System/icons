/**
 * Публичный API модуля иконок для SPA (клиентский рендеринг).
 *
 * Экспортирует компонент `Icon`, фабрику `createIcon` и связанные типы
 * с поддержкой ленивой загрузки иконок через динамический `import()`.
 */

export { Icon, type IconProps } from "./Icon.js"

export { createIcon } from "./Icon.create.js"

export type {
	IIconComponentProps,
	TEmptyIconRegistry,
	TIcon,
	TIconLoader,
	TIconModule,
	TIconName,
	TIconRegistry,
} from "./Icon.types.js"
