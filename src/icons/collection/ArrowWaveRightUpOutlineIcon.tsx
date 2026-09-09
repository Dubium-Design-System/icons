import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ArrowWaveRightUpOutlineIcon = ({
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
		<path d="M17 10h4v4" />
		<path d="M3 12c.887-1.284 2.48-2.033 4-2 1.52-.033 3.113.716 4 2s2.48 2.033 4 2c1.52.033 3-1 4-2l2-2" />
	</svg>
)

export default ArrowWaveRightUpOutlineIcon
