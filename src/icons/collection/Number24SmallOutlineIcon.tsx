import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Number24SmallOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M14 8v3a1 1 0 0 0 1 1h3m0-4v8M6 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3"/></svg>
)

export default Number24SmallOutlineIcon
