import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ShadowOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M5.634 5.638a9 9 0 0 0 12.728 12.727m1.68-2.32A9 9 0 0 0 7.956 3.957M16 12h2m-5 3h2m-2 3h1m-1-9h4m-4-3h1M3 3l18 18"/></svg>
)

export default ShadowOffOutlineIcon
