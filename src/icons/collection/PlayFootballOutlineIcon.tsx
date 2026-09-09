import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PlayFootballOutlineIcon = ({
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
		<path d="m3 17 5 1 .75-1.5M14 21v-4l-4-3 1-6" />
		<path d="M6 12V9l5-1 3 3 3 1m1.007 7.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0m-8-14.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
	</svg>
)

export default PlayFootballOutlineIcon
