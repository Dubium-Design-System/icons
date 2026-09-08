import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandParsintaOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 3a9 9 0 1 0 9 9"/><path d="M21 12a9 9 0 0 0-9-9" opacity=".5"/><path d="M10 9v6l5-3z"/></svg>
)

export default BrandParsintaOutlineIcon
