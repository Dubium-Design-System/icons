import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandBlackberryOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M7 6a1 1 0 0 0-1-1H4l-.5 2H6a1 1 0 0 0 1-1m-1 6a1 1 0 0 0-1-1H3l-.5 2H5a1 1 0 0 0 1-1m7 0a1 1 0 0 0-1-1h-2l-.5 2H12a1 1 0 0 0 1-1m1-6a1 1 0 0 0-1-1h-2l-.5 2H13a1 1 0 0 0 1-1m-2 12a1 1 0 0 0-1-1H9l-.5 2H11a1 1 0 0 0 1-1m8-3a1 1 0 0 0-1-1h-2l-.5 2H19a1 1 0 0 0 1-1m1-6a1 1 0 0 0-1-1h-2l-.5 2H20a1 1 0 0 0 1-1"/></svg>
)

export default BrandBlackberryOutlineIcon
