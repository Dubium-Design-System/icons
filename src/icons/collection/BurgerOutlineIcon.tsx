import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BurgerOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M4 15h16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4m8-11c3.783 0 6.953 2.133 7.786 5H4.214C5.047 6.133 8.217 4 12 4m-7 8h14"/></svg>
)

export default BurgerOutlineIcon
