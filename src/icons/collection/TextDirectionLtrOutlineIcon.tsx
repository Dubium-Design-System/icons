import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TextDirectionLtrOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M5 19h14m-2 2 2-2-2-2M16 4H9.5a3.5 3.5 0 0 0 0 7h.5m4 4V4m-4 11V4"/></svg>
)

export default TextDirectionLtrOutlineIcon
