import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WorldPauseOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M20.945 12.997a9 9 0 1 0-7.928 7.945M3.6 9h16.8M3.6 15h9.9"/><path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 2.51 10.526M17 17v5m4-5v5"/></svg>
)

export default WorldPauseOutlineIcon
