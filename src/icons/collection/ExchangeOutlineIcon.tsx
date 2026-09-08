import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ExchangeOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M19 8v5a5 5 0 0 1-5 5h-3l3-3m0 6-3-3m-6-2v-5a5 5 0 0 1 5-5h3l-3-3m0 6 3-3"/></svg>
)

export default ExchangeOutlineIcon
