import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Stretching2OutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m6.5 21 3.5-5m-5-5 7-2m4 12-4-7V9l7-4M9.007 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/></svg>
)

export default Stretching2OutlineIcon
