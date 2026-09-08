import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DroneOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M10 10h4v4h-4zm0 0L6.5 6.5M9.96 6A3.5 3.5 0 1 0 6 9.96m8 .04 3.5-3.5m.5 3.46A3.5 3.5 0 1 0 14.04 6M14 14l3.5 3.5m-3.46.5A3.5 3.5 0 1 0 18 14.04M10 14l-3.5 3.5M6 14.04A3.5 3.5 0 1 0 9.96 18"/></svg>
)

export default DroneOutlineIcon
