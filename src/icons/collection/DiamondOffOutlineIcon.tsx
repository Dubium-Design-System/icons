import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DiamondOffOutlineIcon = ({
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
		<path d="M9 5h9l3 5-3.308 3.697m-1.883 2.104L12.5 19.5a.7.7 0 0 1-1 0L3 10l2.62-4.368" />
		<path d="M10 12 8 9.8l.6-1M3 3l18 18" />
	</svg>
)

export default DiamondOffOutlineIcon
