import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const EyeglassOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M5.536 5.546 3 14M16 4h2l3 10m-11 2h4m5.426 3.423A3.5 3.5 0 0 1 14 16.5V14m4 0h3v2.5q0 .236-.03.463M10 16.5a3.5 3.5 0 0 1-7 0V14h7zM3 3l18 18"/></svg>
)

export default EyeglassOffOutlineIcon
