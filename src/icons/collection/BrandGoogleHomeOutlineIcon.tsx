import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandGoogleHomeOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M19.072 21H4.928A1.93 1.93 0 0 1 3 19.072v-6.857c0-.512.203-1 .566-1.365l7.07-7.063a1.93 1.93 0 0 1 2.727 0l7.071 7.063c.363.362.566.853.566 1.365v6.857A1.93 1.93 0 0 1 19.072 21"/><path d="M7 13v4h10v-4l-5-5m2.8-2.8L3 17m4 0v4m10-4v4"/></svg>
)

export default BrandGoogleHomeOutlineIcon
