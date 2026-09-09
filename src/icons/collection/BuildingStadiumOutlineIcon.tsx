import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BuildingStadiumOutlineIcon = ({
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
		<path d="M4 12a8 2 0 1 0 16 0 8 2 0 1 0-16 0" />
		<path d="M4 12v7c0 .94 2.51 1.785 6 2v-3h4v3c3.435-.225 6-1.07 6-2v-7m-5-6h4V3h-4v7M7 6h4V3H7v7" />
	</svg>
)

export default BuildingStadiumOutlineIcon
