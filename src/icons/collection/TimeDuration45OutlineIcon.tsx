import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TimeDuration45OutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M13 15h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2V9h3M7 9v2a1 1 0 0 0 1 1h1m1-3v6M7.5 4.2v.01M4.2 7.5v.01"/><path d="M3 12a9 9 0 1 0 9-9"/></svg>
)

export default TimeDuration45OutlineIcon
