import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ShoppingCartShareOutlineIcon = ({
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
		<path d="M12.5 17H6V3H4" />
		<path d="m6 5 14 1-1 7H6m10 9 5-5m0 4.5V17h-4.5" />
	</svg>
)

export default ShoppingCartShareOutlineIcon
