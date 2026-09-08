import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const IceCreamOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 21.5V17M8 8v9h8v-1m0-4V7a4 4 0 0 0-7.277-2.294M8 10.5l1.74-.76m2.79-1.222L16 7m-8 7.5 4.488-1.964M3 3l18 18"/></svg>
)

export default IceCreamOffOutlineIcon
