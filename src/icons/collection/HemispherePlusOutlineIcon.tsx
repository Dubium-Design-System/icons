import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HemispherePlusOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 9a9 3 0 1 0 18 0A9 3 0 1 0 3 9"/><path d="M3 9a9 9 0 0 0 9 9m8.396-5.752A9 9 0 0 0 21 9m-5 10h6m-3-3v6"/></svg>
)

export default HemispherePlusOutlineIcon
