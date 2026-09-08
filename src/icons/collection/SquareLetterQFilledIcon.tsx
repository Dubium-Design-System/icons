import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SquareLetterQFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-7 5a3 3 0 0 0-3 3v4a3 3 0 0 0 4.168 2.764l.125-.057a1 1 0 0 0 1.414-1.414l.057-.125A3 3 0 0 0 15 14v-4a3 3 0 0 0-3-3m1 7.001h-.059a.996.996 0 0 0-.941 1A1 1 0 0 1 11 14v-4a1 1 0 0 1 2 0z"/></svg>
)

export default SquareLetterQFilledIcon
