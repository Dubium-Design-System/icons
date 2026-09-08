import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CircleChevronsLeftOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m15 15-3-3 3-3m-4 6-3-3 3-3"/><path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/></svg>
)

export default CircleChevronsLeftOutlineIcon
