import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PillsOutlineIcon = ({
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
		<path d="M3 8a5 5 0 1 0 10 0A5 5 0 1 0 3 8m10 9a4 4 0 1 0 8 0 4 4 0 1 0-8 0M4.5 4.5l7 7m8 3-5 5" />
	</svg>
)

export default PillsOutlineIcon
