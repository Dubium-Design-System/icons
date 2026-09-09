import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TransitionRightOutlineIcon = ({
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
		<path d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3M3 18V6a3 3 0 1 1 6 0v12a3 3 0 0 1-6 0m6-6h8m-3 3 3-3-3-3" />
	</svg>
)

export default TransitionRightOutlineIcon
