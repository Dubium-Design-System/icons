import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CircleLetterRFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 5h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1l.117-.007A1 1 0 0 0 11 16v-2.332l2.2 2.932a1 1 0 0 0 1.4.2l.096-.081A1 1 0 0 0 14.8 15.4l-1.903-2.538.115-.037A3.001 3.001 0 0 0 12 7m0 2a1 1 0 0 1 0 2h-1V9z" />
	</svg>
)

export default CircleLetterRFilledIcon
