import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SphereOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 12c0 1.657 4.03 3 9 3 .987 0 1.936-.053 2.825-.15m3.357-.67C19.917 13.633 21 12.86 21 12"/><path d="M20.051 16.027A9 9 0 0 0 7.968 3.952m-2.34 1.692a9 9 0 0 0 12.74 12.716M3 3l18 18"/></svg>
)

export default SphereOffOutlineIcon
