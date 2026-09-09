import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ThermometerOutlineIcon = ({
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
		<path d="M19 5a2.83 2.83 0 0 1 0 4l-8 8H7v-4l8-8a2.83 2.83 0 0 1 4 0m-3 2-1.5-1.5M13 10l-1.5-1.5M10 13l-1.5-1.5M7 17l-3 3" />
	</svg>
)

export default ThermometerOutlineIcon
