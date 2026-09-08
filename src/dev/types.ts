import type { ComponentType, LazyExoticComponent } from "react"

import type { IIconComponentProps } from "../icons/collection/types.js"

export type TIconModule = {
	default: ComponentType<IIconComponentProps>
}

export type TLazyIconComponent = LazyExoticComponent<ComponentType<IIconComponentProps>>

export type TIconVariant = "colors" | "filled" | "outline"

export type TIconTab = "all" | "filled" | "outline"

export type TDevView = "icons" | "documentation"

/**
 * Режим подключения библиотеки.
 *
 * `vite`
 * -> <Icon name="AIOutline" />
 *
 * `other`
 * -> <Icon name={AIOutlineIcon} />
 */
export type TBuilder = "vite" | "other"

export type TIconItem = {
	name: string

	componentName: string

	variant: TIconVariant

	Component: TLazyIconComponent

	searchValue: string
}
