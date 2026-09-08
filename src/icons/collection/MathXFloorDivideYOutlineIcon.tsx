import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MathXFloorDivideYOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m1.5 19 18-18m-15 21 18-18M18 15l3 4m2-4-4.5 8M1 1l6 6M1 7l6-6"/></svg>
)

export default MathXFloorDivideYOutlineIcon
