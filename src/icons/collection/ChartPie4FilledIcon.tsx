import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ChartPie4FilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="m11.844 13.57 4.843 7.264a10 10 0 0 1-11.015-1.09zm6.507 6.154L13.87 13h8.081a10 10 0 0 1-3.348 6.511zM11.001 2.05v9.534l-6.744 6.744A10 10 0 0 1 2 12l.005-.324A10 10 0 0 1 11 2.05m6 1.29A10 10 0 0 1 21.95 11H13V2.05a10 10 0 0 1 4 1.29"/></svg>
)

export default ChartPie4FilledIcon
