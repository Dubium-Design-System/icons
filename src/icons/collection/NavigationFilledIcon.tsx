import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const NavigationFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M11.092 2.581a1 1 0 0 1 1.754-.116l.062.116 8.005 17.365c.198.566.05 1.196-.378 1.615a1.53 1.53 0 0 1-1.459.393l-7.077-2.398L5.1 21.894a1.54 1.54 0 0 1-1.52-.231l-.112-.1c-.398-.386-.556-.954-.393-1.556l.047-.15z"/></svg>
)

export default NavigationFilledIcon
