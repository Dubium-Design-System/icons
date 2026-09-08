import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ClickOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 12h3m6-9v3M7.8 7.8 5.6 5.6m10.6 2.2 2.2-2.2M7.8 16.2l-2.2 2.2M12 12l9 3-4 2-2 4z"/></svg>
)

export default ClickOutlineIcon
