import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandLineOutlineIcon = ({
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
		<path d="M21 10.663C21 6.439 16.959 3 12 3s-9 3.439-9 7.663c0 3.783 3.201 6.958 7.527 7.56 1.053.239.932.644.696 2.133-.039.238-.184.932.777.512.96-.42 5.18-3.201 7.073-5.48C20.377 13.884 21 12.359 21 10.673z" />
	</svg>
)

export default BrandLineOutlineIcon
