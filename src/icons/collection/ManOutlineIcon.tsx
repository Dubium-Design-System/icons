import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ManOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M10 16v5m4-5v5M9 9h6l-1 7h-4zm-4 2q2-2 4-2m10 2q-2-2-4-2m-5-5a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/></svg>
)

export default ManOutlineIcon
