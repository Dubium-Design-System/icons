import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandNytimesOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M11.036 5.058a8 8 0 1 0 8.706 9.965"/><path d="M12 21V10l-7.5 4m13-11a2.5 2.5 0 1 1 0 5l-11-5a2.5 2.5 0 0 0-.67 4.91M9 12v8m7-7h-.01"/></svg>
)

export default BrandNytimesOutlineIcon
