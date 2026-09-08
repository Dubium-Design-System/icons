import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Send2OutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M4.698 4.034 21 12 4.698 19.966a.5.5 0 0 1-.546-.124.56.56 0 0 1-.12-.568L6.5 12 4.032 4.726a.56.56 0 0 1 .12-.568.5.5 0 0 1 .546-.124M6.5 12H21"/></svg>
)

export default Send2OutlineIcon
