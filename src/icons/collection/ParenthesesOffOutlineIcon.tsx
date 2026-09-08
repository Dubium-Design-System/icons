import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ParenthesesOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M5.743 5.745A12.25 12.25 0 0 0 7 20M17 4a12.25 12.25 0 0 1 2.474 11.467m-1.22 2.794A12.3 12.3 0 0 1 17 20M3 3l18 18"/></svg>
)

export default ParenthesesOffOutlineIcon
