import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ChartPie2FilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M11 2.05V12a1 1 0 0 0 1 1h9.95A10 10 0 0 1 2 12l.005-.324A10 10 0 0 1 11 2.05m6 1.29A10 10 0 0 1 21.95 11H13V2.05a10 10 0 0 1 4 1.29"/></svg>
)

export default ChartPie2FilledIcon
