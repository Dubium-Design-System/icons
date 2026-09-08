import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandThreejsOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M8 22 3 3l19 5.5z"/><path d="m12.573 17.58-6.152-1.576 8.796-9.466 1.914 6.64"/><path d="M12.573 17.58 11 11l6.13 2.179M9.527 4.893 11 11 4.69 9.436z"/></svg>
)

export default BrandThreejsOutlineIcon
