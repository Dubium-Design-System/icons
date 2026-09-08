import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DoorOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 21h18M6 21V6m1.18-2.825C7.43 3.063 7.708 3 8 3h8a2 2 0 0 1 2 2v9m0 4v3M3 3l18 18"/></svg>
)

export default DoorOffOutlineIcon
