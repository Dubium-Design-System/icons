import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const GlobeOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M7 9a4 4 0 1 0 8 0 4 4 0 0 0-8 0"/><path d="M5.75 15A8.015 8.015 0 1 0 15 2m-4 15v4m-4 0h8"/></svg>
)

export default GlobeOutlineIcon
