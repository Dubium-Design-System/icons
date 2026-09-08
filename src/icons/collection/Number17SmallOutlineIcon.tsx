import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Number17SmallOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M8 8h1v8m4-8h4l-2 8"/></svg>
)

export default Number17SmallOutlineIcon
