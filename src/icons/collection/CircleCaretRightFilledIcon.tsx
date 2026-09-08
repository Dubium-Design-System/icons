import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CircleCaretRightFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-5.293 4.953A1 1 0 0 0 10 9v6c0 .217.07.433.21.613l.083.094a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 0-1.414z"/></svg>
)

export default CircleCaretRightFilledIcon
