import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MathXDivide2OutlineIcon = ({
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
		<path d="M10 15h3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h3m-9-9h14M9 3l6 6M9 9l6-6" />
	</svg>
)

export default MathXDivide2OutlineIcon
