import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DiscountOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m9 15 6-6"/><path fill={color} d="M9 9.5a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0m5 5a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0"/><path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/></svg>
)

export default DiscountOutlineIcon
