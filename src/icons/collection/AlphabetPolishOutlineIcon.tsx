import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AlphabetPolishOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M7 10h2a2 2 0 0 1 2 2v5H8a2 2 0 1 1 0-4h3m5-6v10m2-6-4 2m-3.5 4a1.5 1.5 0 0 0 0 3"/></svg>
)

export default AlphabetPolishOutlineIcon
