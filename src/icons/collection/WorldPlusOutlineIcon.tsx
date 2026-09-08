import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WorldPlusOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M20.985 12.518a9 9 0 1 0-8.45 8.466M3.6 9h16.8M3.6 15H15"/><path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 2.283 12.157M16 19h6m-3-3v6"/></svg>
)

export default WorldPlusOutlineIcon
