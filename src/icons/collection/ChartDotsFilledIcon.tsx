import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ChartDotsFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 2a1 1 0 0 1 1 1v17h17a1 1 0 0 1 .993.883L22 21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"/><path d="M19 4a3 3 0 1 1-.651 5.93l-2.002 3.202a3 3 0 1 1-4.927.337l-1.378-1.655a3 3 0 1 1 1.538-1.282l1.378 1.654a3 3 0 0 1 1.693-.115l2.002-3.203A3 3 0 0 1 19 4"/></svg>
)

export default ChartDotsFilledIcon
