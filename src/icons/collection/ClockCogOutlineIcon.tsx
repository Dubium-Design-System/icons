import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ClockCogOutlineIcon = ({
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
		<path d="M21 12a9 9 0 1 0-9.002 9m5.003-2a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2-3.5V17m0 4v1.5m3.031-5.25-1.299.75m-3.463 2-1.3.75m0-3.5 1.3.75m3.463 2 1.3.75" />
		<path d="M12 7v5l2 2" />
	</svg>
)

export default ClockCogOutlineIcon
