import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandFlightradar24OutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/><path d="M7 12a5 5 0 1 0 10 0 5 5 0 1 0-10 0"/><path d="m8.5 20 3.5-8-6.5 6"/><path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/></svg>
)

export default BrandFlightradar24OutlineIcon
