import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const StretchingOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M15 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M5 20l5-.5 1-2m7 2.5v-5h-5.5L15 8.5l-5.5 1 1.5 2"/></svg>
)

export default StretchingOutlineIcon
