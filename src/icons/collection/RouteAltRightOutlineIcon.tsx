import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const RouteAltRightOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M16 3h5v5M8 3H3v5"/><path d="m21 3-7.536 7.536A5 5 0 0 0 12 14.07V21M6 6.01V6m2 2.02v-.01M10 10v.01"/></svg>
)

export default RouteAltRightOutlineIcon
