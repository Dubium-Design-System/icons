import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Filter2SearchOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M4 6h16M6 12h8.5M9 18h2m4 0a3 3 0 1 0 6.001 0A3 3 0 0 0 15 18m5.2 2.2L22 22"/></svg>
)

export default Filter2SearchOutlineIcon
