import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandPushoverOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M6.16 10.985C5.33 9.05 7.69 3 14.355 3 17.688 3 19 4.382 19 6.9c0 2.597-2.612 6.1-9 6.1m2.5-7L7 21"/></svg>
)

export default BrandPushoverOutlineIcon
