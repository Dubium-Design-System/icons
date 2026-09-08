import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PacmanOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M6.636 5.636a9 9 0 0 1 13.397.747L14.414 12l5.619 5.617A9 9 0 1 1 6.636 5.636"/><path d="M11.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/></svg>
)

export default PacmanOutlineIcon
