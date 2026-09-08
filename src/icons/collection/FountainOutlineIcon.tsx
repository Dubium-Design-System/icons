import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FountainOutlineIcon = ({
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
		<path d="M9 16v-5a2 2 0 1 0-4 0m10 5v-5a2 2 0 1 1 4 0" />
		<path d="M12 16V6a3 3 0 0 1 6 0M6 6a3 3 0 0 1 6 0M3 16h18v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z" />
	</svg>
)

export default FountainOutlineIcon
