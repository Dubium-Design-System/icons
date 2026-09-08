import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const UmbrellaFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 3a9 9 0 0 1 9 9 1 1 0 0 1-.883.993L20 13h-7v5a1 1 0 0 0 1.993.117L15 18a1 1 0 0 1 2 0 3 3 0 0 1-5.995.176L11 18v-5H4a1 1 0 0 1-.993-.883L3 12a9 9 0 0 1 9-9"/></svg>
)

export default UmbrellaFilledIcon
