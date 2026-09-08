import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CirclesFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M6.5 12a5 5 0 1 1-4.995 5.217L1.5 17l.005-.217A5 5 0 0 1 6.5 12m11 0a5 5 0 1 1-4.995 5.217L12.5 17l.005-.217A5 5 0 0 1 17.5 12M12 2a5 5 0 1 1-4.995 5.217L7 7l.005-.217A5 5 0 0 1 12 2"/></svg>
)

export default CirclesFilledIcon
