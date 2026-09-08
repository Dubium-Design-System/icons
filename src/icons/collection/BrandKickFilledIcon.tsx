import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandKickFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M9 3a1 1 0 0 1 1 1v3h1V6a1 1 0 0 1 .883-.993L12 5h1V4a1 1 0 0 1 .883-.993L14 3h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v1a1 1 0 0 1-.883.993L18 11h-1v2h1a1 1 0 0 1 .993.883L19 14v1h1a1 1 0 0 1 .993.883L21 16v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-1h-1a1 1 0 0 1-.993-.883L11 18v-1h-1v3a1 1 0 0 1-.883.993L9 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/></svg>
)

export default BrandKickFilledIcon
