import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BatteryVerticalCharging2OutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M7 18V7a2 2 0 0 1 2-2h.5c.276 0 .5-.224.5-.5s.224-.5.5-.5h3c.276 0 .5.224.5.5s.224.5.5.5h.5a2 2 0 0 1 2 2v1M7 18a2 2 0 0 0 2 2h1m2-6h6v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm3 7v-3m-2-4v-2.5m4 2.5v-2.5"/></svg>
)

export default BatteryVerticalCharging2OutlineIcon
