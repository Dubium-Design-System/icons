import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DropletsOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M4.072 20.3a3 3 0 0 0 3.856 0 3 3 0 0 0 .67-3.798l-2.095-3.227a.6.6 0 0 0-1.005 0L3.4 16.502a3 3 0 0 0 .671 3.798m12.001 0a3 3 0 0 0 3.856 0 3 3 0 0 0 .67-3.798l-2.095-3.227a.6.6 0 0 0-1.005 0L15.4 16.502a3 3 0 0 0 .671 3.798m-5.999-10a3 3 0 0 0 3.856 0 3 3 0 0 0 .67-3.798l-2.095-3.227a.6.6 0 0 0-1.005 0L9.4 6.502a3 3 0 0 0 .671 3.798z"/></svg>
)

export default DropletsOutlineIcon
