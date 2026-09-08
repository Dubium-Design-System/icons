import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HeartDiscountOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m13 19-1 1-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572M16 21l5-5m0 5v.01M16 16v.01"/></svg>
)

export default HeartDiscountOutlineIcon
