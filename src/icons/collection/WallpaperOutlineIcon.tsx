import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WallpaperOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M8 6h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6"/><path d="M4 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M8 18V6a2 2 0 1 0-4 0v12"/></svg>
)

export default WallpaperOutlineIcon
