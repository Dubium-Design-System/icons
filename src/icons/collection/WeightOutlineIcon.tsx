import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WeightOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M9 6a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/><path d="M6.835 9h10.33a1 1 0 0 1 .984.821l1.637 9A1 1 0 0 1 18.802 20H5.198a1 1 0 0 1-.984-1.179l1.637-9A1 1 0 0 1 6.835 9"/></svg>
)

export default WeightOutlineIcon
