import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DragonOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M10.706 8.849 5 5.548 3 12l3.5-1.973L7 13l3.555-1.385"/><path d="M15 9c0 3.5 4 3 4 7 0 3-3 5-5.5 5s-6-.5-6.5-5c2 2 6.592 3.043 7.5 1 1.094-2.461-4-3.459-4-6.5 0-2.062.5-2.5 1.8-3.2"/><path d="M18 6a3 3 270 1 0-3 3h5l1-3z"/><path d="M15 3H7l5 3"/></svg>
)

export default DragonOutlineIcon
