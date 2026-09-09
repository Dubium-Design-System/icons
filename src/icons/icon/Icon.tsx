import { IconContainer } from "./Icon.container.js"
import type { IconProps } from "./Icon.types.js"

/**
 * Универсальный React-компонент для отображения иконки.
 *
 * Принимает конкретный компонент иконки через `name`
 * и не зависит от Vite, registry или virtual modules.
 *
 * @example
 * ```tsx
 * import { UserIcon } from "@dubium/icons/icons"
 * import { Icon } from "@dubium/icons/icon"
 *
 * <Icon name={UserIcon} />
 * ```
 */
export const Icon = ({
	ariaLabel,
	color = "var(--icon-color, currentColor)",
	deg = 0,
	height,
	name: IconComponent,
	secondaryColor = "var(--icon-secondary-color, currentColor)",
	size = 24,
	strokeWidth,
	style,
	width,
}: IconProps) => (
	<IconContainer ariaLabel={ariaLabel} deg={deg} height={height} size={size} style={style} width={width}>
		<IconComponent
			aria-hidden="true"
			color={color}
			focusable="false"
			secondaryColor={secondaryColor}
			strokeWidth={strokeWidth}
		/>
	</IconContainer>
)

Icon.displayName = "Icon"
