import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SquareToggleHorizontalOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M22 12H2m2 2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8m-2 6a2 2 0 0 0 2-2M4 18a2 2 0 0 0 2 2m8 0h-4"/></svg>
)

export default SquareToggleHorizontalOutlineIcon
