import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BellSchoolOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M4 10a6 6 0 1 0 12 0 6 6 0 1 0-12 0"/><path d="M13.5 15h.5a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h.5m9.5 2a5.698 5.698 0 0 0 4.467-7.932L20 8m-10 2v.01"/><path d="M19 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/></svg>
)

export default BellSchoolOutlineIcon
