import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ChristmasTreeOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M9.5 5.5 12 3l4 4-2 1 4 4-1.5.5M17 17H5l4-4-3-1 3-3m5 8v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3M3 3l18 18"/></svg>
)

export default ChristmasTreeOffOutlineIcon
