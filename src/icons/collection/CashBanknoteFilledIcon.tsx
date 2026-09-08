import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CashBanknoteFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M19 5a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zm-7 4a3 3 0 0 0-2.996 2.85L9 12a3 3 0 1 0 3-3m6.01 2H18a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2m-12 0H6a1 1 0 1 0 .01 2 1 1 0 0 0 0-2"/></svg>
)

export default CashBanknoteFilledIcon
