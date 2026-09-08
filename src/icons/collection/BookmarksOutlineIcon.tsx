import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BookmarksOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M15 10v11l-5-3-5 3V10a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3"/><path d="M11 3h5a3 3 0 0 1 3 3v11"/></svg>
)

export default BookmarksOutlineIcon
