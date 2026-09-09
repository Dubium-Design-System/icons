import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MathSinOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M4 15c.345.6 1.258 1 2 1a2 2 0 1 0 0-4 2 2 0 1 1 0-4c.746 0 1.656.394 2 1m4-1v8m4 0V8l4 8V8" />
	</svg>
)

export default MathSinOutlineIcon
