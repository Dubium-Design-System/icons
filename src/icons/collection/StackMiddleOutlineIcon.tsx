import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const StackMiddleOutlineIcon = ({
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
		<path d="m16 10 4-2-8-4-8 4 4 2" />
		<path fill={color} d="m12 12-4-2-4 2 8 4 8-4-4-2z" />
		<path d="m8 14-4 2 8 4 8-4-4-2" />
	</svg>
)

export default StackMiddleOutlineIcon
