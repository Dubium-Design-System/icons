import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FileStarFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="m12 2 .117.007a1 1 0 0 1 .876.876L13 3v4l.005.15a2 2 0 0 0 1.838 1.844L15 9h4l.117.007a1 1 0 0 1 .876.876L20 10v9a3 3 0 0 1-2.824 2.995L17 22H7a3 3 0 0 1-2.995-2.824L4 19V5a3 3 0 0 1 2.824-2.995L7 2zm-.2 9a.39.39 0 0 0-.351.217l-1.086 2.193-2.428.352a.389.389 0 0 0-.217.665l1.757 1.707-.415 2.411a.392.392 0 0 0 .568.41l2.172-1.138 2.172 1.138a.39.39 0 0 0 .567-.411l-.414-2.41 1.757-1.707a.39.39 0 0 0-.217-.665l-2.428-.352-1.086-2.193A.39.39 0 0 0 11.8 11"/><path d="M19 7h-4l-.001-4.001z"/></svg>
)

export default FileStarFilledIcon
