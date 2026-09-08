import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FileDeltaFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="m12 2 .117.007a1 1 0 0 1 .876.876L13 3v4l.005.15a2 2 0 0 0 1.838 1.844L15 9h4l.117.007a1 1 0 0 1 .876.876L20 10v9a3 3 0 0 1-2.824 2.995L17 22H7a3 3 0 0 1-2.995-2.824L4 19V5a3 3 0 0 1 2.824-2.995L7 2zm.894 8.553a1 1 0 0 0-1.788 0l-3 6A1 1 0 0 0 9 18h6a1 1 0 0 0 .894-1.447zM12 13.236 13.381 16h-2.763zm2.999-10.237L19 7h-4z"/></svg>
)

export default FileDeltaFilledIcon
