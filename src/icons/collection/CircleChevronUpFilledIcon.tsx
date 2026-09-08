import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CircleChevronUpFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-4.293 5.953a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 0 1.414l.094.083a1 1 0 0 0 1.32-.083L12 11.415l2.293 2.292a1 1 0 0 0 1.414-1.414z"/></svg>
)

export default CircleChevronUpFilledIcon
