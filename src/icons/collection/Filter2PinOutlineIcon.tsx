import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Filter2PinOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M4 6h16M6 12h10m-7 6h3m7 0v.01m2.121 2.111a3.005 3.005 0 0 0-.454-4.616 3 3 0 0 0-3.334 0 3 3 0 0 0-.454 4.616Q17.506 20.749 19 22q1.577-1.335 2.121-1.879L19 18"/></svg>
)

export default Filter2PinOutlineIcon
