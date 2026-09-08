import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandDoctrineOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M5 14a7 7 0 1 0 14 0 7 7 0 1 0-14 0m4 0h6"/><path d="m12 11 3 3-3 3M10 3l6.9 6"/></svg>
)

export default BrandDoctrineOutlineIcon
