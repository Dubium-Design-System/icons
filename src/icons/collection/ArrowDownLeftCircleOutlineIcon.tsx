import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ArrowDownLeftCircleOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M15.536 8.464 6 18m0-4v4h4m5.586-9.586a2 2 0 1 0 2.828-2.828 2 2 0 0 0-2.828 2.828"/></svg>
)

export default ArrowDownLeftCircleOutlineIcon
