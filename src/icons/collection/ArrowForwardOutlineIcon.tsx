import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ArrowForwardOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m15 11 4 4-4 4m4-4H8a4 4 0 0 1 0-8h1"/></svg>
)

export default ArrowForwardOutlineIcon
