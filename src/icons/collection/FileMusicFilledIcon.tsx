import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FileMusicFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="m12 2 .117.007a1 1 0 0 1 .876.876L13 3v4l.005.15a2 2 0 0 0 1.838 1.844L15 9h4l.117.007a1 1 0 0 1 .876.876L20 10v9a3 3 0 0 1-2.824 2.995L17 22H7a3 3 0 0 1-2.995-2.824L4 19V5a3 3 0 0 1 2.824-2.995L7 2zm.447 9.106A1 1 0 0 0 11 12v3a2 2 0 0 0-1.995 1.85L9 17a2 2 0 1 0 4 0v-3.382l.553.276a1 1 0 0 0 .894-1.788z" />
		<path d="M19 7h-4l-.001-4.001z" />
	</svg>
)

export default FileMusicFilledIcon
