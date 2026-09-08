import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PillowOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M6 9a9.34 9.34 0 0 1 0 6"/><path d="M21.699 16.607c.481.934.28 2.088-.486 2.79-.767.703-1.9.77-2.74.165a48 48 0 0 1-12.946 0 2.16 2.16 0 0 1-2.74-.165 2.345 2.345 0 0 1-.486-2.79 41.7 41.7 0 0 1 0-9.163 2.346 2.346 0 0 1 .433-2.856 2.16 2.16 0 0 1 2.793-.145 48 48 0 0 1 12.946 0 2.16 2.16 0 0 1 2.793.145c.78.726.961 1.918.433 2.856a41.7 41.7 0 0 1 0 9.163"/></svg>
)

export default PillowOutlineIcon
