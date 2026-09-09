import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BatteryOffOutlineIcon = ({
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
		<path d="m3 3 18 18M11 7h6a2 2 0 0 1 2 2v.5a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v.5m-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1" />
	</svg>
)

export default BatteryOffOutlineIcon
