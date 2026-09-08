import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const NavigationTopOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M16.54 19.977a.34.34 0 0 0 .357-.07.33.33 0 0 0 .084-.35L12 9 7.018 19.557a.33.33 0 0 0 .084.35.34.34 0 0 0 .357.07L12 18.5zM12 3v2"/></svg>
)

export default NavigationTopOutlineIcon
