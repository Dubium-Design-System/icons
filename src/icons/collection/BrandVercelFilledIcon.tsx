import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandVercelFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M11.143 3.486a1 1 0 0 1 1.714 0l9 15A1 1 0 0 1 21 20H3a1 1 0 0 1-.857-1.514z"/></svg>
)

export default BrandVercelFilledIcon
