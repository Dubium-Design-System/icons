import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MoodEditOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M20.955 11.104a9 9 0 1 0-9.895 9.847M9 10h.01M15 10h.01"/><path d="M9.5 15c.658.672 1.56 1 2.5 1q.189 0 .376-.018m6.044-.372a2.1 2.1 0 0 1 2.97 2.97L18 22h-3v-3z"/></svg>
)

export default MoodEditOutlineIcon
