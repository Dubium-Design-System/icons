import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const InnerShadowBottomRightFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m6 9a1 1 0 0 0-1 1 5 5 0 0 1-5 5 1 1 0 0 0 0 2 7 7 0 0 0 7-7 1 1 0 0 0-1-1"/></svg>
)

export default InnerShadowBottomRightFilledIcon
