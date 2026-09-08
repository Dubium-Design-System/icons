import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TrendingUp3OutlineIcon = ({
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
		<path d="m18 5 3 3-3 3" />
		<path d="M3 18h2.397a5 5 0 0 0 4.096-2.133l4.014-5.734A5 5 0 0 1 17.603 8H21" />
	</svg>
)

export default TrendingUp3OutlineIcon
