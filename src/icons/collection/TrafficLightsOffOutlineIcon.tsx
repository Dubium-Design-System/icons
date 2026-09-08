import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TrafficLightsOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M8 4c.912-1.219 2.36-2 4-2a5 5 0 0 1 5 5v6m0 4a5 5 0 0 1-10 0V7"/><path d="M12 8a1 1 0 1 0-1-1m.291 4.295a1 1 0 0 0 1.418 1.41M11 17a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 3l18 18"/></svg>
)

export default TrafficLightsOffOutlineIcon
