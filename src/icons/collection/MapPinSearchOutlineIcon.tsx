import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MapPinSearchOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M14.916 11.707A3 3 0 1 0 12 14"/><path d="M11.991 21.485a2 2 0 0 1-1.404-.585l-4.244-4.243a8 8 0 1 1 13.651-5.351"/><path d="M15 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0m5.2 2.2L22 22"/></svg>
)

export default MapPinSearchOutlineIcon
