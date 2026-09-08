import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ArrowCurveRightOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m10 7 4-4 4 4"/><path d="M14 3v4.394A6.74 6.74 0 0 1 11 13a6.74 6.74 0 0 0-3 5.606V21"/></svg>
)

export default ArrowCurveRightOutlineIcon
