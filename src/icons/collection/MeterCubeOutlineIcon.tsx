import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MeterCubeOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M17 5h1.5a1.5 1.5 0 0 1 0 3H18h.5a1.5 1.5 0 0 1 0 3H17M4 12v6m0-4a2 2 0 0 1 2-2h.5A2.5 2.5 0 0 1 9 14.5V18m0-2.5v-1a2.5 2.5 0 1 1 5 0V18"/></svg>
)

export default MeterCubeOutlineIcon
