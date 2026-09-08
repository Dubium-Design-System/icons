import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const IdBadgeOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M7.141 3.125A3 3 0 0 1 8 3h8a3 3 0 0 1 3 3v9m-.13 3.874A3 3 0 0 1 16 21H8a3 3 0 0 1-3-3V6a3 3 0 0 1 .128-.869"/><path d="M11.179 11.176a2 2 0 1 0 2.635 2.667M10 6h4M9 18h6M3 3l18 18"/></svg>
)

export default IdBadgeOffOutlineIcon
