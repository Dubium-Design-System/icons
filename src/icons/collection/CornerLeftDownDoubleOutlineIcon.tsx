import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CornerLeftDownDoubleOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M18 4h-6a3 3 0 0 0-3 3v7"/><path d="m13 10-4 4-4-4m8 5-4 4-4-4"/></svg>
)

export default CornerLeftDownDoubleOutlineIcon
