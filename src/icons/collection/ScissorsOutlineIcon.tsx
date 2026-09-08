import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ScissorsOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 7a3 3 0 1 0 6 0 3 3 0 1 0-6 0m0 10a3 3 0 1 0 6 0 3 3 0 1 0-6 0m5.6-8.4L19 19M8.6 15.4 19 5"/></svg>
)

export default ScissorsOutlineIcon
