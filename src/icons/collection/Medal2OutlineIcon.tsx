import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Medal2OutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M9 3h6l3 7-6 2-6-2zm3 9L9 3m6 8-3-8m0 16.5L9 21l.5-3.5-2-2 3-.5 1.5-3 1.5 3 3 .5-2 2L15 21z"/></svg>
)

export default Medal2OutlineIcon
