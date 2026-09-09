import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const InfinityOffOutlineIcon = ({
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
		<path d="M8.165 8.174A4 4 0 0 0 2.999 12a4 4 0 0 0 6.829 2.828A10 10 0 0 0 12 12m1.677-2.347a10 10 0 0 1 .495-.481 4 4 0 1 1 5.129 6.1m-3.521.537a4 4 0 0 1-1.608-.981A10 10 0 0 1 12 12M3 3l18 18" />
	</svg>
)

export default InfinityOffOutlineIcon
