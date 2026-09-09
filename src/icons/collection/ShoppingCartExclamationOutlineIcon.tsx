import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ShoppingCartExclamationOutlineIcon = ({
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
		<path d="M15 17H6V3H4" />
		<path d="m6 5 14 1-.854 5.976M16.5 13H6m13 3v3m0 3v.01" />
	</svg>
)

export default ShoppingCartExclamationOutlineIcon
