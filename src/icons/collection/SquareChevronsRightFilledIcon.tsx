import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SquareChevronsRightFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM8.613 8.21a1 1 0 0 0-1.32.083l-.083.094a1 1 0 0 0 .083 1.32L9.585 12l-2.292 2.293-.083.094a1 1 0 0 0 1.497 1.32l3-3 .083-.094a1 1 0 0 0-.083-1.32l-3-3zm5 0a1 1 0 0 0-1.32.083l-.083.094a1 1 0 0 0 .083 1.32L14.585 12l-2.292 2.293-.083.094a1 1 0 0 0 1.497 1.32l3-3 .083-.094a1 1 0 0 0-.083-1.32l-3-3z"/></svg>
)

export default SquareChevronsRightFilledIcon
