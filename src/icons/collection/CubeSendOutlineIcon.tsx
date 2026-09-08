import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CubeSendOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m16 12.5-5-3 5-3 5 3V15l-5 3z"/><path d="M11 9.5V15l5 3m0-5.455 5-3.03M7 9H2m5 3H4m3 3H6"/></svg>
)

export default CubeSendOutlineIcon
