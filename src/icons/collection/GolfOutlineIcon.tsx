import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const GolfOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 18V3l7 4-7 4"/><path d="M9 17.67c-.62.36-1 .82-1 1.33 0 1.1 1.8 2 4 2s4-.9 4-2c0-.5-.38-.97-1-1.33"/></svg>
)

export default GolfOutlineIcon
