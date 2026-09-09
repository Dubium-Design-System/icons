import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BikeOffOutlineIcon = ({
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
		<path d="M2 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0m14.437-1.56a3 3 0 0 0 4.123 4.123M22 18a3 3 0 0 0-3-3m-7 4v-4l-3-3 1.665-1.332m2.215-1.772L14 8l2 3h3m-3-6a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 3l18 18" />
	</svg>
)

export default BikeOffOutlineIcon
