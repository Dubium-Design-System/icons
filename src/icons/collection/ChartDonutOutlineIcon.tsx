import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ChartDonutOutlineIcon = ({
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
		<path d="M10 3.2A9 9 0 1 0 20.8 14a1 1 0 0 0-1-1H16a4.1 4.1 0 1 1-5-5V4a.9.9 0 0 0-1-.8" />
		<path d="M15 3.5A9 9 0 0 1 20.5 9H16a9 9 0 0 0-1-1z" />
	</svg>
)

export default ChartDonutOutlineIcon
