import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BarbellOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M2 12h1m3-4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2m.298-9.712A1 1 0 0 0 6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9m0 3h3m3 3v2a1 1 0 0 0 1 1h1c.275 0 .523-.11.704-.29M18 14V7a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v4m3-3h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1m2-4h-1M3 3l18 18"/></svg>
)

export default BarbellOffOutlineIcon
