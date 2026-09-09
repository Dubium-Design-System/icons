import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandAsanaOutlineIcon = ({
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
		<path d="M9 7a3 3 0 1 0 6 0 3 3 0 1 0-6 0m5 9a3 3 0 1 0 6 0 3 3 0 1 0-6 0M4 16a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
	</svg>
)

export default BrandAsanaOutlineIcon
