import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CurrencyWonOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m4 6 3.245 11.358a.85.85 0 0 0 1.624.035L12 8l3.131 9.393a.85.85 0 0 0 1.624-.035L20 6m1 4H3m18 4H3"/></svg>
)

export default CurrencyWonOutlineIcon
