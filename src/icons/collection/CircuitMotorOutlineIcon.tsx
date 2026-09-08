import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CircuitMotorOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M5 12a7 7 0 1 0 14 0 7 7 0 1 0-14 0m0 0H2m17 0h3"/><path d="M10 14v-4l2 2 2-2v4"/></svg>
)

export default CircuitMotorOutlineIcon
