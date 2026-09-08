import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const LabelFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M16.52 6a2 2 0 0 1 1.561.75l3.7 4.625a1 1 0 0 1 0 1.25l-3.7 4.624A2 2 0 0 1 16.52 18H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3z"/></svg>
)

export default LabelFilledIcon
