import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MathSecOutlineIcon = ({
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
		<path d="M3 15c.345.6 1.258 1 2 1a2 2 0 1 0 0-4 2 2 0 1 1 0-4c.746 0 1.656.394 2 1m14 1a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0m-7-6h-4v8h4m-4-4h2.5" />
	</svg>
)

export default MathSecOutlineIcon
