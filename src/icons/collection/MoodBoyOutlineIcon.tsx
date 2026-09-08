import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MoodBoyOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M17 4.5a9 9 0 0 1 3.864 5.89 2.5 2.5 0 0 1-.29 4.36 9 9 0 0 1-17.137 0 2.5 2.5 0 0 1-.29-4.36 9 9 0 0 1 3.746-5.81"/><path d="M9.5 16a3.5 3.5 0 0 0 5 0m-6-14C10 3 11 5.5 11 7m1.5-5c1.5 2 2 3.5 2 5M9 12h.01M15 12h.01"/></svg>
)

export default MoodBoyOutlineIcon
