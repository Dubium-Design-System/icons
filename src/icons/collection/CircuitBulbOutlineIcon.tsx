import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CircuitBulbOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M2 12h5m10 0h5M7 12a5 5 0 1 0 10 0 5 5 0 1 0-10 0m1.5-3.5 7 7m0-7-7 7"/></svg>
)

export default CircuitBulbOutlineIcon
