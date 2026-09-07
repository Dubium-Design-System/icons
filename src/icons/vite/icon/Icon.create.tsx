import type { TEmptyIconRegistry, TIconRegistry } from "./Icon.types.js"

import { Icon, type IconProps } from "./Icon.js"

/**
 * Создаёт типизированную версию Icon
 * для кастомного registry.
 *
 * При этом autocomplete содержит:
 *
 * - все встроенные иконки @sg/icons;
 * - все ключи TCustomIcons.
 *
 * @example
 *
 * ```ts
 * const appIcons = {
 *   CompanyLogo: () => import("./CompanyLogoIcon"),
 *   SpecialDocument: () => import("./SpecialDocumentIcon"),
 * } as const
 *
 * const AppIcon = createIcon<typeof appIcons>()
 * ```
 *
 * После этого:
 *
 * ```tsx
 * <AppIcon name="Abacus" />
 * <AppIcon name="CompanyLogo" />
 * ```
 *
 * оба варианта будут типизированы.
 */
export const createIcon = <TCustomIcons extends TIconRegistry = TEmptyIconRegistry>() => {
	const TypedIcon = (props: IconProps<TCustomIcons>) => {
		return <Icon<TCustomIcons> {...props} />
	}

	TypedIcon.displayName = "TypedIcon"

	return TypedIcon
}
