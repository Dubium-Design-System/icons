import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandGatsbyOutlineIcon = ({
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
		<path d="m3.296 14.297 6.407 6.407a9.02 9.02 0 0 1-6.325-6.116zM16 13h5c-.41 3.603-3.007 6.59-6.386 7.614L3.386 9.385A9 9 0 0 1 19.046 6.4" />
	</svg>
)

export default BrandGatsbyOutlineIcon
