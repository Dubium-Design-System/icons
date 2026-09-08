import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const RocketOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M9.29 9.275A9 9 0 0 0 9 10a6 6 0 0 0-5 3 8 8 0 0 1 7 7 6 6 0 0 0 3-5q.362-.128.708-.283m2.428-1.61A9 9 0 0 0 20 7a3 3 0 0 0-3-3 9 9 0 0 0-6.107 2.864"/><path d="M7 14a6 6 0 0 0-3 6 6 6 0 0 0 6-3m4-8a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 3l18 18"/></svg>
)

export default RocketOffOutlineIcon
