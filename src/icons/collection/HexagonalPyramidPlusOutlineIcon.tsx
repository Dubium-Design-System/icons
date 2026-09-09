import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HexagonalPyramidPlusOutlineIcon = ({
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
		<path d="m18.642 12.04-5.804-9.583a.996.996 0 0 0-1.676 0L3.316 15.411a1.99 1.99 0 0 0 .267 2.483l2.527 2.523c.374.373.88.583 1.408.583H12.5M12 2 7 20.9M12 2l3.304 12.489M16 19h6m-3-3v6" />
	</svg>
)

export default HexagonalPyramidPlusOutlineIcon
