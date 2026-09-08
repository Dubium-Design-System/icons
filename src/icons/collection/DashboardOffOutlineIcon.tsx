import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DashboardOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M11.175 11.178a2 2 0 1 0 2.653 2.634M14.5 10.5l1-1"/><path d="M8.621 4.612a9 9 0 0 1 11.721 11.72m-1.516 2.488A9 9 0 0 1 17.6 20H6.4a9 9 0 0 1-.268-13.87M3 3l18 18"/></svg>
)

export default DashboardOffOutlineIcon
