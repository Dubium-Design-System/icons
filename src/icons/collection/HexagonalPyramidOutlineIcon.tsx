import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HexagonalPyramidOutlineIcon = ({
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
		<path d="M11.162 2.457 3.316 15.411a1.99 1.99 0 0 0 .267 2.483l2.527 2.523c.374.373.88.583 1.408.583h8.964c.528 0 1.034-.21 1.408-.583l2.527-2.523a1.99 1.99 0 0 0 .267-2.483L12.838 2.457a.996.996 0 0 0-1.676 0M12 2 7 20.9M12 2l5 18.9" />
	</svg>
)

export default HexagonalPyramidOutlineIcon
