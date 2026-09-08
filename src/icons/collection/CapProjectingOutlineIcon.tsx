import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CapProjectingOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M20 6H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h13"/><path d="M13 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 0h7"/></svg>
)

export default CapProjectingOutlineIcon
