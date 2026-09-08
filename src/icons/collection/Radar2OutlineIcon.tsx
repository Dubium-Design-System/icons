import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Radar2OutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/><path d="M15.51 15.56A5 5 0 1 0 12 17"/><path d="M18.832 17.86A9 9 0 1 0 12 21m0-9v9"/></svg>
)

export default Radar2OutlineIcon
