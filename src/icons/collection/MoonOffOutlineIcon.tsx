import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MoonOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M7.962 3.949A9 9 0 0 1 12 2.992V3h.393a7.5 7.5 0 0 0-2.07 3.308m-.141 3.84c.186.823.514 1.626.989 2.373a7.5 7.5 0 0 0 4.586 3.268m3.893-.11q.334-.1.663-.233a9 9 0 0 1-.274.597m-1.695 2.337A9 9 0 0 1 5.634 5.631M3 3l18 18"/></svg>
)

export default MoonOffOutlineIcon
