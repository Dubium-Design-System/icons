import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandStackshareOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M17 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m0 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0m4 0h3l3.5 6H17m0-12h-3.5L10 12"/></svg>
)

export default BrandStackshareOutlineIcon
