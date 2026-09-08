import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FileInfoFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="m12 2 .117.007a1 1 0 0 1 .876.876L13 3v4l.005.15a2 2 0 0 0 1.838 1.844L15 9h4l.117.007a1 1 0 0 1 .876.876L20 10v9a3 3 0 0 1-2.824 2.995L17 22H7a3 3 0 0 1-2.995-2.824L4 19V5a3 3 0 0 1 2.824-2.995L7 2zm0 12h-1a1 1 0 0 0 0 2v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1l-.007-.117a1 1 0 0 0-.876-.876L13 18v-3a1 1 0 0 0-1-1m.01-3H12a1 1 0 0 0-.117 1.993l.127.007a1 1 0 0 0 0-2"/><path d="M19 7h-4l-.001-4.001z"/></svg>
)

export default FileInfoFilledIcon
