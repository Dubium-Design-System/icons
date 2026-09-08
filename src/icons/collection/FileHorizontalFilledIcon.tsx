import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FileHorizontalFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="m22 12-.007-.117a1 1 0 0 0-.876-.876L21 11h-4l-.15-.005a2 2 0 0 1-1.844-1.838L15 9V5l-.007-.117a1 1 0 0 0-.876-.876L14 4H5a3 3 0 0 0-2.995 2.824L2 7v10a3 3 0 0 0 2.824 2.995L5 20h14a3 3 0 0 0 2.995-2.824L22 17z"/><path d="M17 5v4l4.001.001z"/></svg>
)

export default FileHorizontalFilledIcon
