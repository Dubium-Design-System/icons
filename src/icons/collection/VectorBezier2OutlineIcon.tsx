import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const VectorBezier2OutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm14 14a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM7 5h7m-4 14h7m-9 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0m6-14a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/><path d="M7 5.5a5 6.5 0 0 1 5 6.5 5 6.5 0 0 0 5 6.5"/></svg>
)

export default VectorBezier2OutlineIcon
