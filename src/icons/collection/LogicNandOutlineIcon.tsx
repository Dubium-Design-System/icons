import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const LogicNandOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M22 12h-3M2 9h3m-3 6h3M7 5c6 0 8 3.5 8 7s-2 7-8 7H5V5zm8 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/></svg>
)

export default LogicNandOutlineIcon
