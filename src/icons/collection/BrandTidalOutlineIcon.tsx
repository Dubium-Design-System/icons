import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandTidalOutlineIcon = ({
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
		<path d="m5.333 6 3.334 3.25L12 6l3.333 3.25L18.667 6 22 9.25l-3.333 3.25-3.334-3.25L12 12.5l3.333 3.25L12 19l-3.333-3.25L12 12.5 8.667 9.25 5.333 12.5 2 9.25z" />
	</svg>
)

export default BrandTidalOutlineIcon
