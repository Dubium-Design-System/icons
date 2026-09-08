import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandMcdonaldsOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M20 20c0-3.952-.966-16-4.038-16S12 13.087 12 18.756C12 13.087 11.104 4 8.038 4 4.973 4 4 16.048 4 20"/></svg>
)

export default BrandMcdonaldsOutlineIcon
