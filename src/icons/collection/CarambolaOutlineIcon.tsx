import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CarambolaOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M17.286 21.09q-1.69.001-5.288-2.615-3.596 2.617-5.288 2.616-2.726 0-.495-6.8-9.389-6.775 2.135-6.775h.076Q10.211 2 12 2q1.785 0 3.574 5.516h.076q11.525 0 2.133 6.774 2.23 6.802-.497 6.8"/></svg>
)

export default CarambolaOutlineIcon
