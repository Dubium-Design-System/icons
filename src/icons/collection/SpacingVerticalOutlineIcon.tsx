import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SpacingVerticalOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M4 20v-2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4m-4 8H8"/></svg>
)

export default SpacingVerticalOutlineIcon
