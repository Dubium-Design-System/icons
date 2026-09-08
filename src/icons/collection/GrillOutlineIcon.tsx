import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const GrillOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M19 8H5a6 6 0 0 0 6 6h2a6 6 0 0 0 6-5.775zm-2 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4m-2-6 1 2m-7-2-3 6m9-2H7m8-13V4m-3 1V4M9 5V4"/></svg>
)

export default GrillOutlineIcon
