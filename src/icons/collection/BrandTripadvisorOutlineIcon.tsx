import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandTripadvisorOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M5 13.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0m11 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0"/><path d="M17.5 9a4.5 4.5 0 1 0 3.5 1.671L22 9zm-11 0A4.5 4.5 0 1 1 3 10.671L2 9z"/><path d="m10.5 15.5 1.5 2 1.5-2M9 6.75q3-1 6 0"/></svg>
)

export default BrandTripadvisorOutlineIcon
