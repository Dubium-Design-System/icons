import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MountainOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M18.281 14.26 14.08 5.388a2.3 2.3 0 0 0-4.158 0l-.165.349M8.468 8.456 3 20h17"/><path d="m7.5 11 2 2.5 2-2M3 3l18 18"/></svg>
)

export default MountainOffOutlineIcon
