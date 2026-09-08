import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MassageOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 17a1 1 0 1 0 2 0 1 1 0 1 0-2 0M8 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M4 22l4-2v-3h12m-9 3h9M8 14l3-2 1-4c3 1 3 4 3 6"/></svg>
)

export default MassageOutlineIcon
