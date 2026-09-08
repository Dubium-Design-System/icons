import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TicTacOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M4 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-1 6h18m-9-9v18m-8-5 4 4m-4 0 4-4m8-12 4 4m-4 0 4-4m-4 14a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/></svg>
)

export default TicTacOutlineIcon
