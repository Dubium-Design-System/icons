import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Disabled2OutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M15 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-6 5a5 5 0 1 0 3.95 7.95"/><path d="m19 20-4-5h-4l3-5-4-3-4 1"/></svg>
)

export default Disabled2OutlineIcon
