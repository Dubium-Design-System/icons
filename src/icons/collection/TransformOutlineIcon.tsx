import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TransformOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 6a3 3 0 1 0 6 0 3 3 0 0 0-6 0m18 5V8a2 2 0 0 0-2-2h-6l3 3m0-6-3 3M3 13v3a2 2 0 0 0 2 2h6l-3-3m0 6 3-3m4 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0"/></svg>
)

export default TransformOutlineIcon
