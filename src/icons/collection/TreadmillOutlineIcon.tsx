import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TreadmillOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M10 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3 14l4 1 .5-.5M12 18v-3l-3-2.923L9.75 7"/><path d="M6 10V8l4-1 2.5 2.5 2.5.5m6 12a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1m15-1 1-11 2-1"/></svg>
)

export default TreadmillOutlineIcon
