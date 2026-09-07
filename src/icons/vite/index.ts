/**
 * Публичный API иконок для Vite.
 *
 * @remarks
 * Экспортирует компонент `Icon` с ленивой загрузкой, фабрику `createIcon`,
 * провайдер `IconProvider`, хук `useIconContext`, функции runtime-реестра
 * (`registerIcons`, `removeIconOwner` и другие) и все связанные типы.
 *
 * Источником иконок служит compile-time virtual registry
 * (`virtual:@dubium/icons-registry`), который генерирует плагин `dubiumIcons`
 * только для используемых иконок, а также runtime registry для динамических имён.
 */

export { createIcon, Icon, type IconProps } from "./icon/index.js"

export { IconProvider, useIconContext } from "./provider/index.js"

export {
	getRuntimeIconLoader,
	getRuntimeIconsVersion,
	registerIcons,
	removeIconOwner,
	subscribeRuntimeIcons,
} from "./runtime/index.js"

export type {
	IIconComponentProps,
	TEmptyIconRegistry,
	TIcon,
	TIconLoader,
	TIconModule,
	TIconName,
	TIconRegistry,
} from "./icon/index.js"

export type { IIconContextValue, IIconProviderProps } from "./provider/index.js"
