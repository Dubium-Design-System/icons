import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PlayerEjectFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="m11.247 3.341-7 8C3.682 11.988 4.141 13 5 13h14c.86 0 1.318-1.012.753-1.659l-7-8a1 1 0 0 0-1.506 0M18 15H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2"/></svg>
)

export default PlayerEjectFilledIcon
