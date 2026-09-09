import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PlayBasketballOutlineIcon = ({
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
		<path d="M9.007 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M5 21l3-3 .75-1.5M14 21v-4l-4-3 .5-6" />
		<path d="m5 12 1-3 4.5-1 3.5 3 4-.5m.007 5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0" />
	</svg>
)

export default PlayBasketballOutlineIcon
