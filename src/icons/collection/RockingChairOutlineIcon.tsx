import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const RockingChairOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m4 3 1.478 6.65A3 3 0 0 0 8.407 12H18m-8 0-3.5 7.5M14 12l3.5 7.5M3 16c1.966 2.992 4.75 5 9 5s7.035-2.002 9-5"/></svg>
)

export default RockingChairOutlineIcon
