import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandWebflowOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M17 10s-1.376 3.606-1.5 4c-.046-.4-1.5-8-1.5-8-2.627 0-3.766 1.562-4.5 3.5 0 0-1.843 4.593-2 5C7.487 14.132 7 10 7 10c-.15-2.371-2.211-3.98-4-3.98L5 19c2.745-.013 4.72-1.562 5.5-3.5 0 0 1.44-4.3 1.5-4.5.013.18 1 8 1 8 2.758 0 4.694-1.626 5.5-3.5L22 6c-2.732 0-4.253 2.055-5 4"/></svg>
)

export default BrandWebflowOutlineIcon
