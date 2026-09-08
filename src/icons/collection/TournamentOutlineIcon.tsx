import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TournamentOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M2 4a2 2 0 1 0 4 0 2 2 0 1 0-4 0m16 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M2 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0m0 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0m4-8h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6"/><path d="M6 4h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2m3-6h4"/></svg>
)

export default TournamentOutlineIcon
