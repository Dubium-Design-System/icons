import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MapPinOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M9.442 9.432a3 3 0 0 0 4.113 4.134M15 11a3 3 0 0 0-3-3"/><path d="M17.152 17.162 13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 0 1-.476-10.794m2.18-1.82a8.003 8.003 0 0 1 10.91 10.912M3 3l18 18"/></svg>
)

export default MapPinOffOutlineIcon
