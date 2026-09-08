import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const UnderlineOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M7 7.4V10c0 2.8 2.2 5 5 5 .9 0 1.8-.2 2.4-.6M5 19h14M3 2.7l18 18m-4.6-8.3q.6-1.05.6-2.4V5"/></svg>
)

export default UnderlineOffOutlineIcon
