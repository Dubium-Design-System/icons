import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TransitionTopOutlineIcon = ({
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
		<path d="M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3m3 15h12a3 3 0 0 0 0-6H6a3 3 0 0 0 0 6m6-6V7m-3 3 3-3 3 3" />
	</svg>
)

export default TransitionTopOutlineIcon
