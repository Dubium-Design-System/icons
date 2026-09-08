import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ChartRadarOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m12 3 9.5 7L18 21H6L2.5 10z"/><path d="m12 7.5 5.5 4L15 17H8.5l-2-5.5z"/><path d="m2.5 10 9.5 3 9.5-3"/><path d="M12 3v10l6 8M6 21l6-8"/></svg>
)

export default ChartRadarOutlineIcon
