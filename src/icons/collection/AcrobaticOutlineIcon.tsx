import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AcrobaticOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M13.207 3 6.472 5.462a1 1 0 0 0-.364 1.646L8 9m2.5-.75L12 8h3.174a2 2 0 0 1 1.411.583L18.007 10M8 9c0 4.5 1.781 5.14 3 5.5m2.007 6.5h-1a1 1 0 0 1-1-1L11 14.5m1.007-.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/></svg>
)

export default AcrobaticOutlineIcon
