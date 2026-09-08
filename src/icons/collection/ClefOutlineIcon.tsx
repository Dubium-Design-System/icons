import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ClefOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M16 12a4.16 4.16 0 0 1-5.62 3.89A3.78 3.78 0 0 1 8 12.5a3.42 3.42 0 0 1 2.34-3.38l3.79-1.42A2.89 2.89 0 0 0 16 5a2 2 0 1 0-4 0v14a2 2 0 1 1-4 0"/></svg>
)

export default ClefOutlineIcon
