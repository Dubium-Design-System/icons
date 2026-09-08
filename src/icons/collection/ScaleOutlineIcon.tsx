import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ScaleOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M7 20h10M6 6l6-1 6 1m-6-3v17m-3-8L6 6l-3 6a3 3 0 0 0 6 0m12 0-3-6-3 6a3 3 0 0 0 6 0"/></svg>
)

export default ScaleOutlineIcon
