import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HighlightOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 19h4L17.5 8.5a2.828 2.828 0 1 0-4-4L3 15zm9.5-13.5 4 4m-12 4 4 4M21 15v4h-8l4-4z"/></svg>
)

export default HighlightOutlineIcon
