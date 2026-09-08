import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const GenderAndrogyneOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m13 11 6-6M4 15a5 5 0 1 0 10 0 5 5 0 1 0-10 0m15-6V5h-4m1.5 5.5-3-3"/></svg>
)

export default GenderAndrogyneOutlineIcon
