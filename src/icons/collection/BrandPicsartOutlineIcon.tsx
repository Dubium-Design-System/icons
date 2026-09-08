import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandPicsartOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M5 9a7 7 0 1 0 14 0A7 7 0 1 0 5 9"/><path d="M9 9a3 3 0 1 0 6 0 3 3 0 1 0-6 0M5 9v11a2 2 0 1 0 4 0v-4.5"/></svg>
)

export default BrandPicsartOutlineIcon
