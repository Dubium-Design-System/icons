import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PanoramaHorizontalOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M4.338 5.53q7.658 2.898 15.317 0A1 1 0 0 1 21 6.464v11c0 .692-.692 1.2-1.34.962q-7.66-2.898-15.321 0A.993.993 0 0 1 3 17.491V6.464a1 1 0 0 1 1.338-.935z"/></svg>
)

export default PanoramaHorizontalOutlineIcon
