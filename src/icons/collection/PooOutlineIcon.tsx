import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PooOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M10 12h.01M14 12h.01M10 16a3.5 3.5 0 0 0 4 0"/><path d="M11 4c2 0 3.5 1.5 3.5 4h.164a2.5 2.5 0 0 1 2.196 3.32 3 3 0 0 1 1.615 3.063 3 3 0 0 1-1.299 5.607H7a3 3 0 0 1-1.474-5.613 3 3 0 0 1 1.615-3.062 2.5 2.5 0 0 1 2.195-3.32H9.5c1.5 0 2.5-2 1.5-4z"/></svg>
)

export default PooOutlineIcon
