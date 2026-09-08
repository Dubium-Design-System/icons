import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BuildingCarouselOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M6 12a6 6 0 1 0 12 0 6 6 0 1 0-12 0"/><path d="M3 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0m7-4a2 2 0 1 0 4 0 2 2 0 1 0-4 0m7 4a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 16a2 2 0 1 0 4 0 2 2 0 1 0-4 0m14 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-9 6 4-10 4 10"/></svg>
)

export default BuildingCarouselOutlineIcon
