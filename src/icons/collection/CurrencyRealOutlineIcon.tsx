import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CurrencyRealOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4M4 18V6h3a3 3 0 1 1 0 6H4c5.5 0 5 4 6 6m8-12V4m-1 16v-2"/></svg>
)

export default CurrencyRealOutlineIcon
