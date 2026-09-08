import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FishChristianityOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M22 7S16.354 17 9.692 17c-3.226.025-6.194-1.905-7.692-5 1.498-3.095 4.466-5.025 7.692-5C16.354 7 22 17 22 17"/></svg>
)

export default FishChristianityOutlineIcon
