import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TrainOutlineIcon = ({
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
		<path d="M21 13c0-3.87-3.37-7-10-7H3m0 9h16a2 2 0 0 0 2-2" />
		<path d="M3 6v5h17.5M3 11v4m5-4V6m5 5V6.5M3 19h18" />
	</svg>
)

export default TrainOutlineIcon
