import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CandleOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M9 21h6V11a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1zm3-19 1.465 1.638a2 2 0 1 1-3.015.099z"/></svg>
)

export default CandleOutlineIcon
