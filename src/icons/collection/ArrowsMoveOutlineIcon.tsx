import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ArrowsMoveOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m18 9 3 3-3 3m-3-3h6M6 9l-3 3 3 3m-3-3h6m0 6 3 3 3-3m-3-3v6m3-15-3-3-3 3m3-3v6"/></svg>
)

export default ArrowsMoveOutlineIcon
