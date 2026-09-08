import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandBitbucketOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3.648 4a.64.64 0 0 0-.64.744l3.14 14.528c.07.417.43.724.852.728h10a.644.644 0 0 0 .642-.539l3.35-14.71a.64.64 0 0 0-.64-.744z"/><path d="M14 15h-4L9 9h6z"/></svg>
)

export default BrandBitbucketOutlineIcon
