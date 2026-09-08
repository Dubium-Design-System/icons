import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BladeOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m17.707 3.707 2.586 2.586a1 1 0 0 1 0 1.414l-.586.586a1 1 0 0 0 0 1.414l.586.586a1 1 0 0 1 0 1.414l-8.586 8.586a1 1 0 0 1-1.414 0l-.586-.586a1 1 0 0 0-1.414 0l-.586.586a1 1 0 0 1-1.414 0l-2.586-2.586a1 1 0 0 1 0-1.414l.586-.586a1 1 0 0 0 0-1.414l-.586-.586a1 1 0 0 1 0-1.414l8.586-8.586a1 1 0 0 1 1.414 0l.586.586a1 1 0 0 0 1.414 0l.586-.586a1 1 0 0 1 1.414 0M8 16l3.2-3.2m1.6-1.6L16 8m-2 0 2 2m-8 4 2 2"/><path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/></svg>
)

export default BladeOutlineIcon
