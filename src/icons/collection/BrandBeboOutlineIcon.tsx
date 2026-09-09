import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandBeboOutlineIcon = ({
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
		<path d="M12 17.5a3.5 3.5 0 0 0 3.5-3.5c0-1.838-1.159-3.002-3.005-3.372-.746-.15-1.37-.745-1.37-1.506 0-1.142.934-2.095 2.058-1.894C16.793 7.873 19 10.286 19 14a7 7 0 1 1-14 0V4.75a1.75 1.75 0 1 1 3.5 0V14a3.5 3.5 0 0 0 3.5 3.5" />
	</svg>
)

export default BrandBeboOutlineIcon
