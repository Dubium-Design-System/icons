import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Microphone2OffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M16.908 12.917a5 5 0 1 0-5.827-5.819m-.965 3.027-6.529 7.46a2 2 0 1 0 2.827 2.83l7.461-6.529M3 3l18 18"/></svg>
)

export default Microphone2OffOutlineIcon
