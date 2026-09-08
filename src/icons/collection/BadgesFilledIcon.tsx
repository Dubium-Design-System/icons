import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BadgesFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M16.486 12.143 12 14.833l-4.486-2.69A1 1 0 0 0 6 13v4a1 1 0 0 0 .486.857l5 3a1 1 0 0 0 1.028 0l5-3A1 1 0 0 0 18 17v-4a1 1 0 0 0-1.514-.857"/><path d="M16.486 3.143 12 5.833l-4.486-2.69A1 1 0 0 0 6 4v4a1 1 0 0 0 .486.857l5 3a1 1 0 0 0 1.028 0l5-3A1 1 0 0 0 18 8V4a1 1 0 0 0-1.514-.857"/></svg>
)

export default BadgesFilledIcon
