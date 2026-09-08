import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SectionSignOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M9.172 19A3 3 0 1 0 12 15m2.83-10A3 3 0 1 0 12 9"/><path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/></svg>
)

export default SectionSignOutlineIcon
