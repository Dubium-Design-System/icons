import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandCtemplarOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M6.04 14.831 10.5 10.5m2.055 10.32c4.55-3.456 7.582-8.639 8.426-14.405a1.67 1.67 0 0 0-.934-1.767A19.65 19.65 0 0 0 12 3a19.65 19.65 0 0 0-8.047 1.647 1.67 1.67 0 0 0-.934 1.767c.844 5.766 3.875 10.95 8.426 14.406a.95.95 0 0 0 1.11 0"/><path d="M20 5c-2 0-4.37 3.304-8 6.644C8.37 8.304 6 5 4 5m13.738 10L13.5 10.5"/></svg>
)

export default BrandCtemplarOutlineIcon
