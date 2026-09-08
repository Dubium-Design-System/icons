import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MilitaryRankOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M18 7v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7l6-4z"/><path d="m10 13 2-1 2 1m-4 4 2-1 2 1m-4-8 2-1 2 1"/></svg>
)

export default MilitaryRankOutlineIcon
