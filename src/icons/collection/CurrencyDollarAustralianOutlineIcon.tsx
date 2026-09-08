import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CurrencyDollarAustralianOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 18 6.279 6.524a.75.75 0 0 1 1.442 0L11 18M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4m3 2v-2m1-12V4M4.5 14h5"/></svg>
)

export default CurrencyDollarAustralianOutlineIcon
