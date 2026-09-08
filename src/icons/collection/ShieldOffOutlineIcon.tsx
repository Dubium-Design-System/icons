import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ShieldOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M17.67 17.667A12 12 0 0 1 12 21 12 12 0 0 1 3.5 6c.794.036 1.583-.006 2.357-.124m3.128-.926A12 12 0 0 0 12 3a12 12 0 0 0 8.5 3 12 12 0 0 1-1.116 9.376M3 3l18 18"/></svg>
)

export default ShieldOffOutlineIcon
