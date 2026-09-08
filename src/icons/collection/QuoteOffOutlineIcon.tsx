import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const QuoteOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M10 11H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1m4 4v3q0 4-4 5m13-7h-4m-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6q0 .99-.245 1.798m-1.653 2.29q-.857.6-2.102.912M3 3l18 18"/></svg>
)

export default QuoteOffOutlineIcon
