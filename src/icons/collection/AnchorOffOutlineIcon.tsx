import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AnchorOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 12v9m-8-8a8 8 0 0 0 14.138 5.13m1.44-2.56A8 8 0 0 0 20 13m1 0h-2M5 13H3m9.866-4.127a3 3 0 1 0-3.737-3.747M3 3l18 18"/></svg>
)

export default AnchorOffOutlineIcon
