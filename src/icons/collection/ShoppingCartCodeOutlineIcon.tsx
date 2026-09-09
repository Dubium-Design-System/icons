import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ShoppingCartCodeOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	strokeWidth = "var(--icon-stroke-width, 1.5px)",
	...svgProps
}: IStrokeIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={strokeWidth}
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M4 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
		<path d="M11.5 17H6V3H4" />
		<path d="m6 5 14 1-1 7H6m14 8 2-2-2-2m-3 0-2 2 2 2" />
	</svg>
)

export default ShoppingCartCodeOutlineIcon
