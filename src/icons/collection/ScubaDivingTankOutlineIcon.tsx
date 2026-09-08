import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ScubaDivingTankOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M8 11a4 4 0 1 1 8 0v5H8zm0 5v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3M9 4h6m-3 3V4M7 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/><path fill={color} d="M11.5 4a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0"/></svg>
)

export default ScubaDivingTankOutlineIcon
