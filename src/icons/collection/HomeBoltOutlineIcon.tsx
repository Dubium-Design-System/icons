import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HomeBoltOutlineIcon = ({
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
		<path d="m19 10-7-7-9 9h2v7a2 2 0 0 0 2 2h7.5" />
		<path d="M9 21v-6a2 2 0 0 1 2-2h2c.661 0 1.248.32 1.612.815M19 14l-2 4h4l-2 4" />
	</svg>
)

export default HomeBoltOutlineIcon
