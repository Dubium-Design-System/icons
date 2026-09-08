import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ArrowRotaryLastLeftOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M15 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 0v6M12.5 9.5 6 3m5 0H6v5"/></svg>
)

export default ArrowRotaryLastLeftOutlineIcon
