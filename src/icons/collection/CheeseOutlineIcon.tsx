import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CheeseOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M4.519 20.008 21 20v-3.5a2 2 0 1 1 0-4V9H4.278"/><path d="m21 9-9.385-4.992c-2.512.12-4.758 1.42-6.327 3.425C3.865 9.253 3 11.654 3 14.287c0 2.117.56 4.085 1.519 5.721M15 13v.01M8 13v.01M11 16v.01"/></svg>
)

export default CheeseOutlineIcon
