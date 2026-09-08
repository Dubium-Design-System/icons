import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AccessibleOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/><path d="m10 16.5 2-3 2 3m-2-3v-2l3-1m-6 0 3 1"/><path fill={color} d="M11.5 7.5a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0"/></svg>
)

export default AccessibleOutlineIcon
