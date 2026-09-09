import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FilePercentFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="m12 2 .117.007a1 1 0 0 1 .876.876L13 3v4l.005.15a2 2 0 0 0 1.838 1.844L15 9h4l.117.007a1 1 0 0 1 .876.876L20 10v9a3 3 0 0 1-2.824 2.995L17 22H7a3 3 0 0 1-2.995-2.824L4 19V5a3 3 0 0 1 2.824-2.995L7 2zm2.01 14H14a1 1 0 0 0-.117 1.993l.127.007a1 1 0 0 0 0-2m.697-3.707a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414M10.01 12H10a1 1 0 0 0-.117 1.993l.127.007a1 1 0 0 0 0-2m4.989-9.001L19 7h-4z" />
	</svg>
)

export default FilePercentFilledIcon
