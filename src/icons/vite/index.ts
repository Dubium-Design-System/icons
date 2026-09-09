/**
 * Публичный API иконок для Vite.
 *
 * Источники иконок:
 *
 * 1. IconProvider;
 * 2. runtime registry;
 * 3. compile-time virtual registry.
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
	IStrokeIconComponentProps,
	TEmptyIconRegistry,
	TIcon,
	TIconLoader,
	TIconModule,
	TIconName,
	TIconRegistry,
	TPackageIconName,
} from "./icon/index.js"

export type { IIconContextValue, IIconProviderProps } from "./provider/index.js"
