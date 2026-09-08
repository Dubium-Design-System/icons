import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const EggFriedFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M14.001 1.996q.06 0 .117.007l.155.003a6 6 0 0 1 4.25 2.05l.176.21a6 6 0 0 1 1.296 4.014l-.018.244.106.06a4 4 0 0 1 1.904 3.087l.011.204a4 4 0 0 1-1.392 3.161l-.085.069.083.16a4 4 0 0 1 .239 2.848l-.065.204a4 4 0 0 1-6.257 1.824l-.115-.096-.092.1a6 6 0 0 1-4.022 1.787l-.257.006a6 6 0 0 1-5.644-8.04l.034-.089-.155-.12a6 6 0 0 1-1.662-7.256l.105-.211a6 6 0 0 1 7.246-2.894l.188.068.073-.06a6 6 0 0 1 3.505-1.334zM12 9a3 3 0 0 0-2.996 2.85L9 12a3 3 0 1 0 3-3"/></svg>
)

export default EggFriedFilledIcon
