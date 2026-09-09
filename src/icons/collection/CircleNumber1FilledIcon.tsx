import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CircleNumber1FilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m.994 5.886c-.083-.777-1.008-1.16-1.617-.67l-.084.077-2 2-.083.094a1 1 0 0 0 0 1.226l.083.094.094.083a1 1 0 0 0 1.226 0l.094-.083.293-.293V16l.007.117a1 1 0 0 0 1.986 0L13 16V8z" />
	</svg>
)

export default CircleNumber1FilledIcon
