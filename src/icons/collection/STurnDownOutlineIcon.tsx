import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const STurnDownOutlineIcon = ({
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
		<path d="M7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
		<path d="M5 7v9.5a3.5 3.5 0 0 0 7 0v-9a3.5 3.5 0 0 1 7 0V21" />
		<path d="m16 18 3 3 3-3" />
	</svg>
)

export default STurnDownOutlineIcon
