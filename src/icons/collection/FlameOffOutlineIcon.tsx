import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FlameOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M8.973 8.974C8.638 9.352 8.303 9.69 8 10c-1.226 1.26-2 3.24-2 5a6 6 0 0 0 11.472 2.466m.383-3.597C17.535 12.46 16.733 10.824 16 10q-.42.706-.79 1.202m-2.358-2.35C12.784 6.695 11.67 4.668 11 4c0 .968-.18 1.801-.465 2.527M3 3l18 18"/></svg>
)

export default FlameOffOutlineIcon
