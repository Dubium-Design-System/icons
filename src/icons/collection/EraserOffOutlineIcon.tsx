import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const EraserOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m3 3 18 18m-2-1H8.5l-4.21-4.3a1 1 0 0 1 0-1.41l5-4.993m2.009-2.01 3-3a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-2.97 3m-2.02 2.043-4.211 4.256M18 13.3 11.7 7"/></svg>
)

export default EraserOffOutlineIcon
