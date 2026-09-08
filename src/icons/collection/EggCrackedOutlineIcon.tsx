import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const EggCrackedOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M19 14.083c0 4.154-2.966 6.74-7 6.917-4.2 0-7-2.763-7-6.917C5 8.545 8.5 2.993 12 3s7 5.545 7 11.083"/><path d="m12 3-1.5 5 3.5 2.5-2 3.5"/></svg>
)

export default EggCrackedOutlineIcon
