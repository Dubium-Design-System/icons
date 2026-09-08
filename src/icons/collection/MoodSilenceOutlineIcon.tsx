import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MoodSilenceOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18M9 10h-.01M15 10h-.01M8 15h8m-7-1v2m3-2v2m3-2v2"/></svg>
)

export default MoodSilenceOutlineIcon
