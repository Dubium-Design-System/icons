import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ElevatorOffOutlineIcon = ({
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
		<path d="M8 4h10a1 1 0 0 1 1 1v10m0 4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5m7 3 2 2" />
		<path d="m10 14 2 2 2-2M3 3l18 18" />
	</svg>
)

export default ElevatorOffOutlineIcon
