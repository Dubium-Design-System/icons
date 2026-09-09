import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const RippleDownOutlineIcon = ({
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
		<path d="M3 7q4.5-3 9 0t9 0M3 17q4.5-3 9 0 .213.142.427.27M3 12q4.5-3 9 0 2.006 1.338 4.012 1.482M19 16v6m3-3-3 3-3-3" />
	</svg>
)

export default RippleDownOutlineIcon
