import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BedFlatOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 11a2 2 0 1 0 4 0 2 2 0 1 0-4 0m7 2h11v-2a3 3 0 0 0-3-3h-8zm-7 3h18"/></svg>
)

export default BedFlatOutlineIcon
