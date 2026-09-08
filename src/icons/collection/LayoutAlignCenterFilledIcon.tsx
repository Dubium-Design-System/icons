import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const LayoutAlignCenterFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 3a1 1 0 0 1 1 1v4h3a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-3v4a1 1 0 0 1-2 0v-4H8a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h3V4a1 1 0 0 1 1-1"/></svg>
)

export default LayoutAlignCenterFilledIcon
