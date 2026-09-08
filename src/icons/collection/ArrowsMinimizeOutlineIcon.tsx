import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ArrowsMinimizeOutlineIcon = ({
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
		<path d="M5 9h4V5M3 3l6 6m-4 6h4v4m-6 2 6-6m10-6h-4V5m0 4 6-6m-2 12h-4v4m0-4 6 6" />
	</svg>
)

export default ArrowsMinimizeOutlineIcon
