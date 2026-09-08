import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WheelOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/><path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0m-6 0h6m6 0h6m-7.4-2.6L17 4.6m-6.6 10L7 19.4M7 4.6l3.4 4.8m3.2 5.2 3.4 4.8"/></svg>
)

export default WheelOutlineIcon
