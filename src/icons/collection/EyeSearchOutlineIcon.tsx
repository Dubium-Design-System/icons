import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const EyeSearchOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/><path d="M12 18q-.492 0-.97-.05Q6.271 17.452 3 12q3.6-6 9-6 5.197 0 8.727 5.558M15 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0m5.2 2.2L22 22"/></svg>
)

export default EyeSearchOutlineIcon
