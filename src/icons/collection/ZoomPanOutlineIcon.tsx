import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ZoomPanOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0m8 5-2.5-2.5M10 4l2-2 2 2m6 6 2 2-2 2M4 10l-2 2 2 2m6 6 2 2 2-2"/></svg>
)

export default ZoomPanOutlineIcon
