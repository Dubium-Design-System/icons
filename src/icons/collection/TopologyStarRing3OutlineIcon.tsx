import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TopologyStarRing3OutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M10 19a2 2 0 1 0-4 0 2 2 0 0 0 4 0m8-14a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-8 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-4 7a2 2 0 1 0-4 0 2 2 0 0 0 4 0m12 7a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-4-7a2 2 0 1 0-4 0 2 2 0 0 0 4 0m8 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0M6 12h4m4 0h4m-3-5-2 3M9 7l2 3m0 4-2 3m4-3 2 3M10 5h4m-4 14h4m3-2 2-3m0-4-2-3M7 7l-2 3m0 4 2 3"/></svg>
)

export default TopologyStarRing3OutlineIcon
