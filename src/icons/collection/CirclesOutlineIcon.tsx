import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CirclesOutlineIcon = ({
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
		<path d="M8 7a4 4 0 1 0 8 0 4 4 0 1 0-8 0M2.5 17a4 4 0 1 0 8 0 4 4 0 1 0-8 0m11 0a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
	</svg>
)

export default CirclesOutlineIcon
