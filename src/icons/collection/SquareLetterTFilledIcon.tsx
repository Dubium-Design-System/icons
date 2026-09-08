import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SquareLetterTFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-5 5h-4a1 1 0 1 0 0 2h1v7a1 1 0 0 0 .883.993L12 17a1 1 0 0 0 1-1V9h1a1 1 0 0 0 .993-.883L15 8a1 1 0 0 0-1-1"/></svg>
)

export default SquareLetterTFilledIcon
