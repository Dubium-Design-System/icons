import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MilkFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="m17.799 7 .144.23A7 7 0 0 1 19 10.93V19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-8.071a7 7 0 0 1 1.057-3.698L6.199 7zM12 13a3 3 0 0 0-2.995 2.824L9 16a3 3 0 1 0 3-3m0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2m2-6h-4a1 1 0 1 0 0 2h4a1 1 0 0 0 0-2m1-7a2 2 0 0 1 2 2v1H7V4a2 2 0 0 1 2-2z" />
	</svg>
)

export default MilkFilledIcon
