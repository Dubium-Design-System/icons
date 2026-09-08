import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TrafficConeOffOutlineIcon = ({
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
		<path d="M4 20h16M9.4 10h.6m4 0h.6m-6.8 5H15m-9 5L9.5 9.5m1-3L11 5h2l2 6m2 6 1 3M3 3l18 18" />
	</svg>
)

export default TrafficConeOffOutlineIcon
