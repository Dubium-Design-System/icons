import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FileTypeBmpOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4m-1 6h1.5a1.5 1.5 0 0 0 0-3H18v6M4 21h1.5a1.5 1.5 0 0 0 0-3H4h1.5a1.5 1.5 0 0 0 0-3H4zm6 0v-6l2.5 3 2.5-3v6"/></svg>
)

export default FileTypeBmpOutlineIcon
