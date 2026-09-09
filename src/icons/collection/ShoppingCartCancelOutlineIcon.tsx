import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ShoppingCartCancelOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M4 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
		<path d="M12 17H6V3H4" />
		<path d="m6 5 14 1-.857 5.998M15.5 13H6m10 6a3 3 0 1 0 6 0 3 3 0 1 0-6 0m1 2 4-4" />
	</svg>
)

export default ShoppingCartCancelOutlineIcon
