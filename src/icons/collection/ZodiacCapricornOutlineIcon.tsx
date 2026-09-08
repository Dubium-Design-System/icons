import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ZodiacCapricornOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M4 4a3 3 0 0 1 3 3v9m0-9a3 3 0 0 1 6 0v11a3 3 0 0 1-3 3m3-4a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/></svg>
)

export default ZodiacCapricornOutlineIcon
