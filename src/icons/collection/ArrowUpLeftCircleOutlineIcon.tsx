import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ArrowUpLeftCircleOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M15.536 15.536 6 6m4 0H6v4m9.586 5.586a2 2 0 1 0 2.828 2.828 2 2 0 0 0-2.828-2.828"/></svg>
)

export default ArrowUpLeftCircleOutlineIcon
