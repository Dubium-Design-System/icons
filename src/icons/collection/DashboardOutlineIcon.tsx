import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DashboardOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M10 13a2 2 0 1 0 4 0 2 2 0 1 0-4 0m3.45-1.45L15.5 9.5"/><path d="M6.4 20a9 9 0 1 1 11.2 0z"/></svg>
)

export default DashboardOutlineIcon
