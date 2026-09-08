import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SmokingNoOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M8 13v4m8-12v.5a2 2 0 0 0 2 2 2 2 0 0 1 2 2v.5M3 3l18 18m-4-8h3a1 1 0 0 1 1 1v2c0 .28-.115.533-.3.714M17 17H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h9"/></svg>
)

export default SmokingNoOutlineIcon
