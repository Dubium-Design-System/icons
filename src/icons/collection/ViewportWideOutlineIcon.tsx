import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ViewportWideOutlineIcon = ({
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
		<path d="M10 12H3l3-3m0 6-3-3m11 0h7l-3-3m0 6 3-3M3 6V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1M3 18v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1" />
	</svg>
)

export default ViewportWideOutlineIcon
