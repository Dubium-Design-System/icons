import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const VaccineOffOutlineIcon = ({
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
		<path d="m17 3 4 4m-2-2-4.5 4.5m-3-3 6 6m-1-1-.5.5m-2 2-4 4H6v-4l4-4m2-2 .5-.5m-5 5L9 14m-6 7 3-3M3 3l18 18" />
	</svg>
)

export default VaccineOffOutlineIcon
