import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const QuotesOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M4 12c-1.333-1.854-1.333-4.146 0-6m4 6c-1.333-1.854-1.333-4.146 0-6m8 12c1.333-1.854 1.333-4.146 0-6m4 6c1.333-1.854 1.333-4.146 0-6"/></svg>
)

export default QuotesOutlineIcon
