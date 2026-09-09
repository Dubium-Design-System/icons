import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CliffJumpingOutlineIcon = ({
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
		<path d="m10.5 18 2.5 2 2-2m3 3 3-3-4-2-2-5" />
		<path d="m9 8 3 3 3 1 4-2 3-2M3 21v-1l2-3 .5-2.5L7 12 6 7l1-3-1-1-2 .5L2 3" />
		<path d="M13.007 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
	</svg>
)

export default CliffJumpingOutlineIcon
