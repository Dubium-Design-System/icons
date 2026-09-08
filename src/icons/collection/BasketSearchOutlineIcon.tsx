import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BasketSearchOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m17 10-2-6m-8 6 2-6m2 16H7.244a3 3 0 0 1-2.965-2.544l-1.255-7.152A2 2 0 0 1 5.001 8H19a2 2 0 0 1 1.977 2.304l-.215 1.227"/><path d="M13.483 12.658a2 2 0 1 0-2.162 3.224M15 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0m5.2 2.2L22 22"/></svg>
)

export default BasketSearchOutlineIcon
