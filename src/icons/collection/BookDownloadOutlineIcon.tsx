import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BookDownloadOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12v5"/><path d="M13 16H6a2 2 0 0 0-2 2m11 1 3 3 3-3m-3 3v-9"/></svg>
)

export default BookDownloadOutlineIcon
