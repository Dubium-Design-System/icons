import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WalkOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M7 21l3-4m6 4-2-4-3-3 1-6"/><path d="m6 12 2-3 4-1 3 3 3 1"/></svg>
)

export default WalkOutlineIcon
