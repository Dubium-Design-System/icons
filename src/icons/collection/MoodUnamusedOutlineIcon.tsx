import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MoodUnamusedOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m8 4 4-1.5"/><path d="M10 10c-.5-1-2.5-1-3 0m10 0c-.5-1-2.5-1-3 0"/></svg>
)

export default MoodUnamusedOutlineIcon
