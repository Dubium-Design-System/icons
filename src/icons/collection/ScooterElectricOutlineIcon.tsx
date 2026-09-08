import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ScooterElectricOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M16 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M8 17h5a6 6 0 0 1 5-5V7a2 2 0 0 0-2-2h-1m-5-1L8 8h3l-2 4"/></svg>
)

export default ScooterElectricOutlineIcon
