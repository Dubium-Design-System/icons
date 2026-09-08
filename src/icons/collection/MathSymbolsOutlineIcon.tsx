import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MathSymbolsOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 12h18m-9-9v18m4.5-16.5 3 3m0-3-3 3M6 4v4M4 6h4m10 10h.01M18 20h.01M4 18h4"/></svg>
)

export default MathSymbolsOutlineIcon
