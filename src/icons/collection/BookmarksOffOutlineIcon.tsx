import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BookmarksOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M11 7h2a2 2 0 0 1 2 2v2m0 4v6l-5-3-5 3V9a2 2 0 0 1 2-2"/><path d="M9.265 4A2 2 0 0 1 11 3h6a2 2 0 0 1 2 2v10M3 3l18 18"/></svg>
)

export default BookmarksOffOutlineIcon
