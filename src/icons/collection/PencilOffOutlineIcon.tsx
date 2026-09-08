import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PencilOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m10 10-6 6v4h4l6-6m1.99-1.99 2.504-2.504a2.828 2.828 0 1 0-4-4l-2.5 2.5M13.5 6.5l4 4M3 3l18 18"/></svg>
)

export default PencilOffOutlineIcon
