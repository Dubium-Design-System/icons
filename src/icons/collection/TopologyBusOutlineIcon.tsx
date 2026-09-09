import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TopologyBusOutlineIcon = ({
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
		<path d="M14 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-8 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0m16 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0M2 16h20M4 12v4m8-4v4m8-4v4" />
	</svg>
)

export default TopologyBusOutlineIcon
