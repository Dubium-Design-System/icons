import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PentagonFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="m10.205 2.6-6.96 5.238A3 3 0 0 0 2.2 11.176l2.896 8.765A3 3 0 0 0 7.946 22h8.12a3 3 0 0 0 2.841-2.037l2.973-8.764a3 3 0 0 0-1.05-3.37l-7.033-5.237-.091-.061-.018-.01-.106-.07a3 3 0 0 0-3.377.148z"/></svg>
)

export default PentagonFilledIcon
