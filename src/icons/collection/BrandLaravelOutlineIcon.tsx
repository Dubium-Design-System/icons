import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandLaravelOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m3 17 8 5 7-4v-8l-4-2.5L18 5l4 2.5v4L11 18l-4-2.5V8L3 5.5zm8 1v4m-4-6.5 7-4m0-4v4m0 0 4 2.5"/><path d="M11 13V5.5L7 3 3 5.5M7 8l4-2.5m7 4.5 4-2.5"/></svg>
)

export default BrandLaravelOutlineIcon
