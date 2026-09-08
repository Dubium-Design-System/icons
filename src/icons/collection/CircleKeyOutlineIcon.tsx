import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CircleKeyOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"/><path d="m12.5 11.5-4 4L10 17m2-2-1.5-1.5"/></svg>
)

export default CircleKeyOutlineIcon
