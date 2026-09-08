import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TrafficLightsOutlineIcon = ({
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
		<path d="M7 7a5 5 0 0 1 5-5 5 5 0 0 1 5 5v10a5 5 0 0 1-5 5 5 5 0 0 1-5-5z" />
		<path d="M11 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
	</svg>
)

export default TrafficLightsOutlineIcon
