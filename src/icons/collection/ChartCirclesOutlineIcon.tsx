import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ChartCirclesOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M4 9.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0-11 0"/><path d="M9 14.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0-11 0"/></svg>
)

export default ChartCirclesOutlineIcon
