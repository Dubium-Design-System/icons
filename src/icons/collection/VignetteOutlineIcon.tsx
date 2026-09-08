import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const VignetteOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0M7.02 12h-.01m5.01-5h-.01m5.01 5h-.01m-4.99 5h-.01M8.483 8.468l-.007-.007m7.078.007-.007-.007m.007 7.078-.007-.007m-7.064.007-.007-.007"/></svg>
)

export default VignetteOutlineIcon
