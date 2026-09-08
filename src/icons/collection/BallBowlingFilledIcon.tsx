import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BallBowlingFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M17 3.34A10 10 0 1 1 7 20.66 10 10 0 0 1 17 3.34M14 11a1 1 0 0 0-1 1v.01a1 1 0 0 0 2 0V12a1 1 0 0 0-1-1m-3-3a1 1 0 0 0-1 1v.01a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1m4-1a1 1 0 0 0-1 1v.01a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1"/></svg>
)

export default BallBowlingFilledIcon
