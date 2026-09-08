import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrightnessUpOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3-7V3m5 4 1.4-1.4M19 12h2m-4 5 1.4 1.4M12 19v2m-5-4-1.4 1.4M6 12H4m3-5L5.6 5.6"/></svg>
)

export default BrightnessUpOutlineIcon
