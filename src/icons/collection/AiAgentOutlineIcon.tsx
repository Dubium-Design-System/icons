import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AiAgentOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M11 14a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-5 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0m10 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-5-9a1 1 0 1 0 2 0 1 1 0 1 0-2 0m2.5 4.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-5 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-5 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-5 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0m15 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/></svg>
)

export default AiAgentOutlineIcon
