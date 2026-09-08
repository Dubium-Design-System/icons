import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Pennant2FilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M14 2a1 1 0 0 1 .993.883L15 3v17h1a1 1 0 0 1 .117 1.993L16 22h-4a1 1 0 0 1-.117-1.993L12 20h1v-7.351L4.594 8.914c-.752-.335-.79-1.365-.113-1.77l.113-.058L13 3.35V3a1 1 0 0 1 1-1" />
	</svg>
)

export default Pennant2FilledIcon
