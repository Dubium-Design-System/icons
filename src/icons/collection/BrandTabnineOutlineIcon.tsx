import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandTabnineOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M20 12 8 18.75M20 12 8 5.25M20 12V7.473L12 3 8 5.25M20 12v4.5L12 21l-4-2.25m0-13.5L4 7.472V16.5l4 2.25L20 12"/></svg>
)

export default BrandTabnineOutlineIcon
