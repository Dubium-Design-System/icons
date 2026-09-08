import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const RewindBackward15OutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M8 20h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H8v-3h3m4 4a6 6 0 1 0 0-12H4m1 8v6"/><path d="M7 9 4 6l3-3"/></svg>
)

export default RewindBackward15OutlineIcon
