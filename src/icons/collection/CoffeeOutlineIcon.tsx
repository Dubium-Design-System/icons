import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CoffeeOutlineIcon = ({
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
		<path d="M3 14c.83.642 2.077 1.017 3.5 1 1.423.017 2.67-.358 3.5-1s2.077-1.017 3.5-1c1.423-.017 2.67.358 3.5 1M8 3a2.4 2.4 0 0 0-1 2 2.4 2.4 0 0 0 1 2m4-4a2.4 2.4 0 0 0-1 2 2.4 2.4 0 0 0 1 2" />
		<path d="M3 10h14v5a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6z" />
		<path d="M16.746 16.726a3 3 0 1 0 .252-5.555" />
	</svg>
)

export default CoffeeOutlineIcon
