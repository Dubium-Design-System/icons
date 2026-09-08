import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandDebianOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 17c-2.397-.943-4-3.153-4-5.635 0-2.19 1.039-3.14 1.604-3.595C12.25 5.637 16 7.5 16 11c0 2.5-2.905 2.121-3.5 1.5s-1-1.5-.5-2.5"/><path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/></svg>
)

export default BrandDebianOutlineIcon
