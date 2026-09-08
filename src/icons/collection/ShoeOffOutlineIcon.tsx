import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ShoeOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m13.846 9.868 4.08.972A4 4 0 0 1 21 14.73V17m-3 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2"/><path d="M8 18v-1a4 4 0 0 0-4-4H3m7-1 .663-1.327M3 3l18 18"/></svg>
)

export default ShoeOffOutlineIcon
