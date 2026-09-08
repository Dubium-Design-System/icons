import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ShovelOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m17 4 3 3m-1.5-1.5-8 8m-2.224-2.216 4.44 4.44a.97.97 0 0 1 0 1.369l-2.704 2.704a4.108 4.108 0 0 1-5.809-5.81l2.704-2.703a.97.97 0 0 1 1.37 0z"/></svg>
)

export default ShovelOutlineIcon
