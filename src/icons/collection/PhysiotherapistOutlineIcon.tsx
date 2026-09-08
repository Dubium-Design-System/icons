import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PhysiotherapistOutlineIcon = ({
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
		<path d="m9 15-1-3 4-2 4 1h3.5M3 19a1 1 0 1 0 2 0 1 1 0 1 0-2 0m8-13a1 1 0 1 0 2 0 1 1 0 1 0-2 0m1 11v-7M8 20h7l1-4 4-2m-2 6h3" />
	</svg>
)

export default PhysiotherapistOutlineIcon
