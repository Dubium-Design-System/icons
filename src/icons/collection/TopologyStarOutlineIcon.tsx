import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TopologyStarOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M8 18a2 2 0 1 0-4 0 2 2 0 0 0 4 0M20 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0M8 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0m12 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-6-6a2 2 0 1 0-4 0 2 2 0 0 0 4 0M7.5 7.5l3 3m-3 6 3-3m3 0 3 3m0-9-3 3"/></svg>
)

export default TopologyStarOutlineIcon
