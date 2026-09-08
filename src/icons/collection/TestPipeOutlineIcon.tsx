import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TestPipeOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M20 8.04 7.878 20.164a2.857 2.857 0 1 1-4.041-4.04L15.959 4M7 13h8m4 2 1.5 1.6a2 2 0 1 1-3 0zM15 3l6 6"/></svg>
)

export default TestPipeOutlineIcon
