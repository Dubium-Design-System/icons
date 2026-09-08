import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandMantineOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/><path d="M11 16a4.97 4.97 0 0 0 2-4 5.01 5.01 0 0 0-2-4m3 1h-2m2 6h-2m-2-3h.01"/></svg>
)

export default BrandMantineOutlineIcon
