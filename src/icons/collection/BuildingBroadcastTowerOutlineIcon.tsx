import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BuildingBroadcastTowerOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/><path d="M16.616 13.924a5 5 0 1 0-9.23 0"/><path d="M20.307 15.469a9 9 0 1 0-16.615 0"/><path d="m9 21 3-9 3 9m-5-2h4"/></svg>
)

export default BuildingBroadcastTowerOutlineIcon
