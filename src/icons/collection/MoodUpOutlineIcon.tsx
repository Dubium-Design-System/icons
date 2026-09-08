import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MoodUpOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M20.984 12.536a9 9 0 1 0-8.463 8.449M19 22v-6m3 3-3-3-3 3m-7-9h.01M15 10h.01"/><path d="M9.5 15c.658.64 1.56 1 2.5 1s1.842-.36 2.5-1"/></svg>
)

export default MoodUpOutlineIcon
