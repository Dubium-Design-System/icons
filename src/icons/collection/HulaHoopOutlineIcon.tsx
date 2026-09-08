import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HulaHoopOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M10 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="m4 6 2 1.5 6 .5 6-.5L20 6m-4 15-4-8V8M8 21l4-8"/><path d="M9.007 10.999C6.637 11.319 5 12.2 5 13c0 1.105 3.134 2 7 2s7-.895 7-2c0-.798-1.636-1.679-4-2"/></svg>
)

export default HulaHoopOutlineIcon
