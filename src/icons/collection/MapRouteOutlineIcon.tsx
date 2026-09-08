import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MapRouteOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m3 7 6-3 6 3 6-3v13l-6 3-6-3-6 3zm6 5v.01M6 13v.01M17 15l-4-4m0 4 4-4"/></svg>
)

export default MapRouteOutlineIcon
