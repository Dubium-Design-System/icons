import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Rating18PlusOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/><path d="M10 10.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0"/><path d="M10 13.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M7 15V9m8.5 3h3M17 10.5v3"/></svg>
)

export default Rating18PlusOutlineIcon
