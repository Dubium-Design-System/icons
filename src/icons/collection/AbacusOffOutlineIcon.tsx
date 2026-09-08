import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AbacusOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M5 5v16m14 0v-2m0-4V3M5 7h2m4 0h8M5 15h10m-7-2v4m3-4v4m5-1v1M14 5v4m-3-4v2M8 8v1M3 21h18M3 3l18 18"/></svg>
)

export default AbacusOffOutlineIcon
