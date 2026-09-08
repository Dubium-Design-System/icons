import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandBadooOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M22 9.43C22 15.268 17.523 20 12 20S2 15.338 2 9.5c0-2.667 1.83-5.01 4.322-5.429C8.814 3.653 11.222 5.463 12 8c.768-2.54 3.177-4.354 5.668-3.931C20.163 4.486 22 6.759 22 9.429"/><path d="M7.5 10c0 2.761 2.015 5 4.5 5s4.5-2.239 4.5-5"/></svg>
)

export default BrandBadooOutlineIcon
