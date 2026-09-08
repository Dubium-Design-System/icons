import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AiGatewayOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M4 6.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0m11 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0m0 11a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0m-11 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0m4.5-2 7-7"/></svg>
)

export default AiGatewayOutlineIcon
