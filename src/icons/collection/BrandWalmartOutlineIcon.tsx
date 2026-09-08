import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandWalmartOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 8.04V3m3.5 7L20 7.5M15.5 14l4.5 2.5m-8-.54V21m-3.5-7L4 16.5M8.5 10 4 7.495"/></svg>
)

export default BrandWalmartOutlineIcon
