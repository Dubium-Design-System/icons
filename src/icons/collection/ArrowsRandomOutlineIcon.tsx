import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ArrowsRandomOutlineIcon = ({
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
		<path d="M20 21h-4v-4m0 4 5-5M6.5 9.504l-3.5-2L5 4M3 7.504l6.83-1.87M4 16l4-1 1 4m-1-4-3.5 6M21 5l-.5 4-4-.5m4 .5L16 3.5" />
	</svg>
)

export default ArrowsRandomOutlineIcon
