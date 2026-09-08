import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AlbumOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M8 4h10a2 2 0 0 1 2 2v10m-.581 3.41c-.362.364-.864.59-1.419.59H6a2 2 0 0 1-2-2V6c0-.552.224-1.052.585-1.413"/><path d="M12 4v4m1.503 1.497L14 9l2 2V4M3 3l18 18"/></svg>
)

export default AlbumOffOutlineIcon
