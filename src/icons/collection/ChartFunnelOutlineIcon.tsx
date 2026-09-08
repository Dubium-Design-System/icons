import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ChartFunnelOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M4.387 3h15.226a1 1 0 0 1 .948 1.316l-5.105 15.316A2 2 0 0 1 13.558 21h-3.116a2 2 0 0 1-1.898-1.368L3.44 4.316A1 1 0 0 1 4.387 3M5 9h14M7 15h10"/></svg>
)

export default ChartFunnelOutlineIcon
