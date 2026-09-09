import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BadgeCcFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM8.5 8A2.5 2.5 0 0 0 6 10.5v3a2.5 2.5 0 1 0 5 0 1 1 0 0 0-2 0 .5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0 1 1 0 0 0 2 0A2.5 2.5 0 0 0 8.5 8m7 0a2.5 2.5 0 0 0-2.5 2.5v3a2.5 2.5 0 1 0 5 0 1 1 0 0 0-2 0 .5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0 1 1 0 0 0 2 0A2.5 2.5 0 0 0 15.5 8" />
	</svg>
)

export default BadgeCcFilledIcon
