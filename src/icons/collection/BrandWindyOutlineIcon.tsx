import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandWindyOutlineIcon = ({
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
		<path d="M9 4c0 5.5-.33 16 4 16s7.546-11.27 8-13" />
		<path d="M3 4c.253 5.44 1.449 16 5.894 16C13.338 20 17.314 9.964 18 6" />
	</svg>
)

export default BrandWindyOutlineIcon
