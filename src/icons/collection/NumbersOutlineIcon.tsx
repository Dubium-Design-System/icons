import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const NumbersOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M8 10V3L6 5m0 11a2 2 0 1 1 4 0c0 .591-.601 1.46-1 2l-3 3h4m5-7a2 2 0 1 0 2-2 2 2 0 1 0-2-2m-8.5 0h3"/></svg>
)

export default NumbersOutlineIcon
