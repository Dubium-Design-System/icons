import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DialpadOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M7 7H3V3m14 0h4v4h-4zm-7 3V3h4v4h-3m-8 3h4v4H3zm14 3v-3h4v4h-3m-4 0h-4v-4m0 7h4v4h-4zM3 3l18 18"/></svg>
)

export default DialpadOffOutlineIcon
