import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HomeStatsOutlineIcon = ({
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
		<path d="M19 13v-1h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h2.5" />
		<path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-2 7 3-3 2 2 4-4" />
		<path d="M19 17h3v3" />
	</svg>
)

export default HomeStatsOutlineIcon
