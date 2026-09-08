import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AiAgentsOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M17 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0m7-14a2 2 0 1 0 4 0 2 2 0 1 0-4 0M6 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0m12 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0M4 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0m7 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0m7 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0m-7 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/></svg>
)

export default AiAgentsOutlineIcon
