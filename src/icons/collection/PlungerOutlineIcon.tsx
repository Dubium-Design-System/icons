import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PlungerOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m12.71 14.12 7.81-7.82a2 2 0 0 0-2.82-2.82l-7.82 7.81"/><path d="m3.71 13.22.7-.71a5 5 0 0 1 7.08 0 5 5 0 0 1 0 7.08l-.71.7M3 12.5l8.5 8.5"/></svg>
)

export default PlungerOutlineIcon
