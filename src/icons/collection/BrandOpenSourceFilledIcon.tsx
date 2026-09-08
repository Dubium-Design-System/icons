import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandOpenSourceFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M12.283 2.004a10 10 0 0 1 3.736 19.155 1 1 0 0 1-1.332-.551l-2.193-5.602a1 1 0 0 1 .456-1.245 2 2 0 1 0-1.9 0 1 1 0 0 1 .457 1.244l-2.193 5.603a1 1 0 0 1-1.332.552A10 10 0 0 1 12 2z"/></svg>
)

export default BrandOpenSourceFilledIcon
