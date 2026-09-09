import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ChartDonut4OutlineIcon = ({
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
		<path d="M8.848 14.667 5.5 17.5M12 3v5m4 4h5M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m11.219 3.328L17 19.5" />
		<path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
	</svg>
)

export default ChartDonut4OutlineIcon
