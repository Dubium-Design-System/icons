import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HdrOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 16V8m4 0v8m-4-4h4m3-4v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm7 4h2a2 2 0 1 0 0-4h-2v8m4 0-3-4"/></svg>
)

export default HdrOutlineIcon
