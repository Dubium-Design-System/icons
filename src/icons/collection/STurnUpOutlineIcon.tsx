import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const STurnUpOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M7 19a2 2 0 1 0-4 0 2 2 0 0 0 4 0"/><path d="M5 17V7.5a3.5 3.5 0 0 1 7 0v9a3.5 3.5 0 0 0 7 0V3"/><path d="m16 6 3-3 3 3"/></svg>
)

export default STurnUpOutlineIcon
