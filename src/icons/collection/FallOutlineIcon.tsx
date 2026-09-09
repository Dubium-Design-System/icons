import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FallOutlineIcon = ({
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
		<path d="m11 21 1-5-1-4-3-4h4l3-3M6 16l-1-4 3-4M5 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m8.5 7H16l4 2" />
	</svg>
)

export default FallOutlineIcon
