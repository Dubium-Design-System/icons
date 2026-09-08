import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WomanOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M10 16v5m4-5v5m-6-5h8l-2-7h-4zm-3-5q2.5-2 5-2m9 2q-2.5-2-5-2m-4-5a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/></svg>
)

export default WomanOutlineIcon
