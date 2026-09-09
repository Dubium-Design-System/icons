import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DirectionSignOffOutlineIcon = ({
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
		<path d="m18.73 14.724 1.949-1.95a1.095 1.095 0 0 0 0-1.548l-7.905-7.905a1.095 1.095 0 0 0-1.548 0l-1.95 1.95m-2.01 2.01-3.945 3.945a1.095 1.095 0 0 0 0 1.548l7.905 7.905c.427.428 1.12.428 1.548 0l3.95-3.95M8 12h4m1.748 1.752L12 15.5M3 3l18 18" />
	</svg>
)

export default DirectionSignOffOutlineIcon
