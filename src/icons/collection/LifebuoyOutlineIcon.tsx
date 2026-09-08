import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const LifebuoyOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/><path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m12 3 3.35 3.35M9 15l-3.35 3.35m0-12.7L9 9m9.35-3.35L15 9"/></svg>
)

export default LifebuoyOutlineIcon
