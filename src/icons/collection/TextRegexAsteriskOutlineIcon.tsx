import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TextRegexAsteriskOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M10 8v6a2 2 0 1 0 4 0v-1a2 2 0 1 0-4 0v1m-3 2v-3a2 2 0 1 0-4 0v1a2 2 0 0 0 3.726 1.01M19 9.5v5m-2-3.75 4 2.5m-4 0 4-2.5"/></svg>
)

export default TextRegexAsteriskOutlineIcon
