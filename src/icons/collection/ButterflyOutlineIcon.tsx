import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ButterflyOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 18.176a3 3 0 1 1-4.953-2.449l-.025.023A4.502 4.502 0 0 1 8.505 7c1.414 0 2.675.652 3.5 1.671a4.5 4.5 0 1 1 4.983 7.079A3 3 0 1 1 12.005 18zM12 19V9M9 3l3 2 3-2"/></svg>
)

export default ButterflyOutlineIcon
