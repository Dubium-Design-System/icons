import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SubtitlesOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M9 5h9a3 3 0 0 1 3 3v8a3 3 0 0 1-.13.874m-2.006 2A3 3 0 0 1 18 19H6a3 3 0 0 1-3-3V8c0-1.35.893-2.493 2.12-2.869M7 15h5m5-3h-1m-4 0h-2M3 3l18 18"/></svg>
)

export default SubtitlesOffOutlineIcon
