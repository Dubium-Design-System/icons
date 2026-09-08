import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MapOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M8.32 4.34 9 4l6 3 6-3v13m-2.67 1.335L15 20l-6-3-6 3V7l2.665-1.333M9 4v1m0 4v8m6-10v4m0 4v5M3 3l18 18"/></svg>
)

export default MapOffOutlineIcon
