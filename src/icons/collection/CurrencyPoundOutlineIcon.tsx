import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CurrencyPoundOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M17 18.5a6 6 0 0 1-5 0 6 6 0 0 0-5 .5 3 3 0 0 0 2-2.5V9a4 4 0 0 1 7.45-2m-2.55 6h-7"/></svg>
)

export default CurrencyPoundOutlineIcon
