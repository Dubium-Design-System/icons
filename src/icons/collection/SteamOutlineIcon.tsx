import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SteamOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M11 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-8 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0m16 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-8 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0M5.5 5.5l3 3m7 7 3 3m0-13-3 3m-7 7-3 3"/></svg>
)

export default SteamOutlineIcon
