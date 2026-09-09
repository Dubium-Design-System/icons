import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CircleChevronDownFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a10 10 0 1 1 0-20m-2.293 8.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 0-1.414l-.094-.083a1 1 0 0 0-1.32.083l-2.294 2.292z" />
	</svg>
)

export default CircleChevronDownFilledIcon
