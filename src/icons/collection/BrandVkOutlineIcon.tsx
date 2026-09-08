import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandVkOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M14 19h-4a8 8 0 0 1-8-8V6h4v5a4 4 0 0 0 4 4V6h4v4.5h.03A4.53 4.53 0 0 0 18 6.004h4l-.342 1.711A6.86 6.86 0 0 1 18 12.504a5.34 5.34 0 0 1 3.566 4.111L22 19.004h-4a4.53 4.53 0 0 0-3.97-4.496v4.5z"/></svg>
)

export default BrandVkOutlineIcon
