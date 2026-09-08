import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TextRegexStartOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M17 8v6a2 2 0 1 0 4 0v-1a2 2 0 1 0-4 0v1m-3 2v-3a2 2 0 1 0-4 0v1a2 2 0 0 0 3.726 1.01M3 10l2-2 2 2"/></svg>
)

export default TextRegexStartOutlineIcon
