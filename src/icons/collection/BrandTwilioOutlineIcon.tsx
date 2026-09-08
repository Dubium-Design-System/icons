import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandTwilioOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"/><path d="M8 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0m6 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 6a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-6 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/></svg>
)

export default BrandTwilioOutlineIcon
