import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ArrowRotaryStraightOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M10 13a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3 3v5m0-18v7M9 7l4-4 4 4"/></svg>
)

export default ArrowRotaryStraightOutlineIcon
