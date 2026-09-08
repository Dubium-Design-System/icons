import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MoodOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M5.634 5.638a9 9 0 0 0 12.732 12.724m1.679-2.322A9 9 0 0 0 7.965 3.954M9 10h.01M15 10h.01"/><path d="M9.5 15a3.5 3.5 0 0 0 5 0M3 3l18 18"/></svg>
)

export default MoodOffOutlineIcon
