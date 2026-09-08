import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Filter2CancelOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M4 6h16M6 12h12m-9 6h3m5 3 4-4m-5 2a3 3 0 1 0 6.001 0A3 3 0 0 0 16 19l1 2"/></svg>
)

export default Filter2CancelOutlineIcon
