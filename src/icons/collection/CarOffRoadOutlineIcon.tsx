import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CarOffRoadOutlineIcon = ({
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
		<path d="M9 17h6m-6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2-7-2-3" />
		<path d="M19 17h2v-5a2 2 0 0 0-2-2h-5v2h-2.586a1 1 0 0 1-.707-.293l-1.121-1.121A2 2 0 0 0 8.172 10H4a1 1 0 0 0-1 1v6h2" />
	</svg>
)

export default CarOffRoadOutlineIcon
