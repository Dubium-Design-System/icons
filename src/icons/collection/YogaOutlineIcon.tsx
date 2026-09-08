import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const YogaOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M4 20h4l1.5-3m7.5 3-1-5h-5l1-7"/><path d="m4 10 4-1 4-1 4 1.5 4 1.5m-9.993-6a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/></svg>
)

export default YogaOutlineIcon
