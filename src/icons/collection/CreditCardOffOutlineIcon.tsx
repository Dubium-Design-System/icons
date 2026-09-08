import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CreditCardOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m3 3 18 18M9 5h9a3 3 0 0 1 3 3v8a3 3 0 0 1-.128.87m-2.002 2.002A3 3 0 0 1 18 19H6a3 3 0 0 1-3-3V8a3 3 0 0 1 2.124-2.87M3 11h8m4 0h6M7 15h.01M11 15h2"/></svg>
)

export default CreditCardOffOutlineIcon
