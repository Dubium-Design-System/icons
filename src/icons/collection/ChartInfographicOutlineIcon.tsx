import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ChartInfographicOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 7a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/><path d="M7 3v4h4M9 17v4m8-7v7m-4-8v8m8-9v9"/></svg>
)

export default ChartInfographicOutlineIcon
