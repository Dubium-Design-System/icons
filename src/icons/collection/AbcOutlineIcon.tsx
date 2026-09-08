import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AbcOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 16v-6a2 2 0 1 1 4 0v6m-4-3h4m3-5v6a2 2 0 1 0 4 0v-1a2 2 0 1 0-4 0v1m10.732-2A2 2 0 0 0 17 13v1a2 2 0 0 0 3.726 1.01"/></svg>
)

export default AbcOutlineIcon
