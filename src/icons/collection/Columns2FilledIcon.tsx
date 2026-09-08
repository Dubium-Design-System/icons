import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Columns2FilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M4 2h6a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m10 0h6a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"/></svg>
)

export default Columns2FilledIcon
