import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MapPinsOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M10.828 9.828a4 4 0 1 0-5.656 0L8 12.657zM8 7v.01m10.828 10.818a4 4 0 1 0-5.656 0L16 20.657zM16 15v.01"/></svg>
)

export default MapPinsOutlineIcon
