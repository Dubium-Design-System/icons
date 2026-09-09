import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TrolleyOutlineIcon = ({
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
		<path d="M9 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-3-3 3 2m3-1 8-12m-3 5 2 1M9.592 4.695l3.306 2.104a1.3 1.3 0 0 1 .396 1.8L10.2 13.41a1.3 1.3 0 0 1-1.792.394L5.102 11.7a1.3 1.3 0 0 1-.396-1.8L7.8 5.09a1.3 1.3 0 0 1 1.792-.394" />
	</svg>
)

export default TrolleyOutlineIcon
