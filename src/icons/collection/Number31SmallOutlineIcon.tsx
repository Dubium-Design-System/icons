import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Number31SmallOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M15 8h1v8M7 8h2.5A1.5 1.5 0 0 1 11 9.5v1A1.5 1.5 0 0 1 9.5 12H8h1.5a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 9.5 16H7"/></svg>
)

export default Number31SmallOutlineIcon
