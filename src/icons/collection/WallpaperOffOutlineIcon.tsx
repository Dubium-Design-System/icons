import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WallpaperOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M10 6h8a2 2 0 0 1 2 2v8m-.58 3.409A2 2 0 0 1 18 20H6"/><path d="M4 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M8 18V8M4.573 4.598A2 2 0 0 0 4 6v12M3 3l18 18"/></svg>
)

export default WallpaperOffOutlineIcon
