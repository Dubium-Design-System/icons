import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CreditCardFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M22 10v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-6zM7.01 14H7a1 1 0 1 0 .01 2 1 1 0 0 0 0-2M13 14h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2m5-10a4 4 0 0 1 4 4H2a4 4 0 0 1 4-4z"/></svg>
)

export default CreditCardFilledIcon
