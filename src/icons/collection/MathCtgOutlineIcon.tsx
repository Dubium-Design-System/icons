import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MathCtgOutlineIcon = ({
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
		<path d="M10 8h4m7 0h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v-4h-1m-8-4v8m-5-6a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0" />
	</svg>
)

export default MathCtgOutlineIcon
