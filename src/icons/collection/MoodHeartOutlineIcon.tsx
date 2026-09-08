import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MoodHeartOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M21 12a9 9 0 1 0-8.012 8.946M9 10h.01M15 10h.01"/><path d="M9.5 15a3.6 3.6 0 0 0 2.774.99m6.72 5.51 2.518-2.58a1.74 1.74 0 0 0 .004-2.413 1.627 1.627 0 0 0-2.346-.005l-.168.172-.168-.172a1.627 1.627 0 0 0-2.346-.004 1.74 1.74 0 0 0-.004 2.412z"/></svg>
)

export default MoodHeartOutlineIcon
