import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FiltersFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M19.396 11.056a6 6 0 0 1-5.647 10.506q.206-.21.396-.44a8 8 0 0 0 1.789-6.155 8.02 8.02 0 0 0 3.462-3.911m-14.787-.005a7.99 7.99 0 0 0 9.386 4.698 6 6 0 1 1-9.534-4.594z"/><path d="M12 2a6 6 0 1 1-6 6l.004-.225A6 6 0 0 1 12 2"/></svg>
)

export default FiltersFilledIcon
