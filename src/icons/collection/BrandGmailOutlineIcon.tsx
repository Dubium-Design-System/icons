import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandGmailOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M16 20h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3zM5 20h3V4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1M16 4l-4 4-4-4"/><path d="m4 6.5 8 7.5 8-7.5"/></svg>
)

export default BrandGmailOutlineIcon
