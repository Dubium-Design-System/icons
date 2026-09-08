import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MeteorOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m21 3-5 9h5l-6.891 7.086A6.5 6.5 0 1 1 5.254 9.58L13 3l-1 5z"/><path d="M7 14.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0"/></svg>
)

export default MeteorOutlineIcon
