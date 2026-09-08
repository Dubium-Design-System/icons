import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HomeRibbonOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M16 15h5v7l-2.5-1.5L16 22z"/><path d="m20 11-8-8-9 9h2v7a2 2 0 0 0 2 2h5"/><path d="M9 21v-6a2 2 0 0 1 2-2h1.5"/></svg>
)

export default HomeRibbonOutlineIcon
