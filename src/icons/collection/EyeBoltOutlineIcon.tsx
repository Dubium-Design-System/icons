import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const EyeBoltOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/><path d="M13.1 17.936A9 9 0 0 1 12 18q-5.4 0-9-6 3.6-6 9-6t9 6m-2 4-2 3h4l-2 3"/></svg>
)

export default EyeBoltOutlineIcon
