import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BadgeAdOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M9 5h10a2 2 0 0 1 2 2v10m-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"/><path d="M14 14v1h1m2-2v-2a2 2 0 0 0-2-2h-1v1m-7 5v-4.5a1.5 1.5 0 0 1 2.077-1.385m.788.762c.087.19.135.4.135.623V15m-3-2h3M3 3l18 18"/></svg>
)

export default BadgeAdOffOutlineIcon
