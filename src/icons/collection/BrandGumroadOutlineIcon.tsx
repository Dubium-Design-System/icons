import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandGumroadOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"/><path d="M13.5 13H16v3"/><path d="M15.024 9.382A4 4 0 1 0 12 16c1.862 0 2.554-1.278 3-3"/></svg>
)

export default BrandGumroadOutlineIcon
