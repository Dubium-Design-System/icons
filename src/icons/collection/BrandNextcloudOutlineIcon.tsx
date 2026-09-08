import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandNextcloudOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M7 12a5 5 0 1 0 10 0 5 5 0 1 0-10 0m-5 .5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0m15 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0"/></svg>
)

export default BrandNextcloudOutlineIcon
