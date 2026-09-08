import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BombOutlineIcon = ({
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
		<path d="M15.349 5.349 18.65 8.65a1.2 1.2 0 0 1 0 1.698l-.972.972a7.5 7.5 0 1 1-5-5l.972-.972a1.2 1.2 0 0 1 1.698 0z" />
		<path d="m17 7 1.293-1.293A2.4 2.4 0 0 0 19 4a1 1 0 0 1 1-1h1M7 13a3 3 0 0 1 3-3" />
	</svg>
)

export default BombOutlineIcon
