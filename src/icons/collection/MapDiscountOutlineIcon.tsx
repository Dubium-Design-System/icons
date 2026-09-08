import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MapDiscountOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m13 19-4-2-6 3V7l6-3 6 3 6-3v8.5M9 4v13m6-10v5.5m1 8.5 5-5m0 5v.01M16 16v.01"/></svg>
)

export default MapDiscountOutlineIcon
