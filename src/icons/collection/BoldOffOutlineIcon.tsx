import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BoldOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M9 5h4a3.5 3.5 0 0 1 2.222 6.204M12 12H7V7m10.107 10.112A3.5 3.5 0 0 1 14 19H7v-7M3 3l18 18"/></svg>
)

export default BoldOffOutlineIcon
