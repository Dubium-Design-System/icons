import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FireHydrantOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M5 21h14m-2 0v-4m2-2v-2a1 1 0 0 0-1-1h-1V8a5 5 0 0 0-8.533-3.538M7.08 7.1A5 5 0 0 0 7 8v4H6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1v5m5-9a2 2 0 1 0 2 2M6 8h2m4 0h6M3 3l18 18"/></svg>
)

export default FireHydrantOffOutlineIcon
