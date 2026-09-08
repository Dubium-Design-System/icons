import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CircleChevronRightFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1-20 0C2 6.477 6.477 2 12 2m-.293 6.293a1 1 0 0 0-1.414 0l-.083.094a1 1 0 0 0 .083 1.32L12.585 12l-2.292 2.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414z"/></svg>
)

export default CircleChevronRightFilledIcon
