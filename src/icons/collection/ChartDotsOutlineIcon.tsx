import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ChartDotsOutlineIcon = ({
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
		<path d="M3 3v18h18" />
		<path d="M7 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0m10-2a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-5 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-1.84-4.38 2.34 2.88m2.588-.172 2.837-4.586" />
	</svg>
)

export default ChartDotsOutlineIcon
