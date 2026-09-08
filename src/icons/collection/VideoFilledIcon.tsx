import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const VideoFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M20.117 7.625a1 1 0 0 0-.564.1L15 10v4l4.553 2.275A1 1 0 0 0 21 15.383V8.617a1 1 0 0 0-.883-.992"/><path d="M5 5C3.355 5 2 6.355 2 8v8c0 1.645 1.355 3 3 3h8c1.645 0 3-1.355 3-3V8c0-1.645-1.355-3-3-3z"/></svg>
)

export default VideoFilledIcon
