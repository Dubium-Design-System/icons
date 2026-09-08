import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandDeezerOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 16.5h2v.5H3zm5 0h2.5v.5H8zm8 .5h-2.5v-.5H16zm5.5 0H19v-.5h2.5zm0-4H19v.5h2.5zm0-3.5H19v.5h2.5zm0-3.5H19v.5h2.5zM16 13h-2.5v.5H16zm-8 .5h2.5V13H8zm0-4h2.5v.5H8z"/></svg>
)

export default BrandDeezerOutlineIcon
