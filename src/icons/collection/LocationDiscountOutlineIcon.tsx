import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const LocationDiscountOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M12.797 19.595 10 14l-7-3.5a.55.55 0 0 1 0-1L21 3l-3.548 9.826M16 21l5-5m0 5v.01M16 16v.01"/></svg>
)

export default LocationDiscountOutlineIcon
