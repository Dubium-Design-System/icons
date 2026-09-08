import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HomeXOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M19 13.4V12h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h5.5"/><path d="M9 21v-6a2 2 0 0 1 2-2h2c.402 0 .777.119 1.091.323M21.5 21.5l-5-5m0 5 5-5"/></svg>
)

export default HomeXOutlineIcon
