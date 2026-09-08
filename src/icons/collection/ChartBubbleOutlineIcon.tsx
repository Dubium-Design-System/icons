import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ChartBubbleOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 16a3 3 0 1 0 6 0 3 3 0 1 0-6 0m11 3a2 2 0 1 0 4 0 2 2 0 1 0-4 0M10 7.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0"/></svg>
)

export default ChartBubbleOutlineIcon
