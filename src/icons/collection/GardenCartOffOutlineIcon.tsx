import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const GardenCartOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M15.733 15.732a2.5 2.5 0 1 0 3.544 3.527M6 8v11a1 1 0 0 0 1.806.591L11.5 14.5v.055"/><path d="M6 8h2m4 0h9l-3 6.01m-3.319.693-4.276-.45a4 4 0 0 1-3.296-2.493L4.256 4.63A1 1 0 0 0 3.328 4H2.005M3 3l18 18"/></svg>
)

export default GardenCartOffOutlineIcon
