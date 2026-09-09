import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TreasureChestOutlineIcon = ({
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
		<path d="M4 19h16a1 1 0 0 0 1-1V9a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v9a1 1 0 0 0 1 1m-1-8h18m-5-6v14M8 5v14m4-8v2" />
	</svg>
)

export default TreasureChestOutlineIcon
