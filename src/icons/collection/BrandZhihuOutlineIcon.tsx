import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandZhihuOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M14 6h6v12h-2l-2 2-1-2h-1zM4 12h6.5m0-6h-5M6 4c-.5 2.5-1.5 3.5-2.5 4.5M8 6v7c0 4.5-2 5.5-4 7m7-2-3-5"/></svg>
)

export default BrandZhihuOutlineIcon
