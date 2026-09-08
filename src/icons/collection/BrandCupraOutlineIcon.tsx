import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandCupraOutlineIcon = ({
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
		<path d="M4.5 10 2 6l15.298 6.909a.2.2 0 0 1 .09.283L14 19" />
		<path d="m10 19-3.388-5.808a.2.2 0 0 1 .09-.283L22 6l-2.5 4" />
	</svg>
)

export default BrandCupraOutlineIcon
