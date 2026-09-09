import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CapStraightOutlineIcon = ({
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
		<path d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 0h12" />
		<path d="M20 6H8a2 2 0 0 0-2 2v2m0 4v2a2 2 0 0 0 2 2h12" />
	</svg>
)

export default CapStraightOutlineIcon
