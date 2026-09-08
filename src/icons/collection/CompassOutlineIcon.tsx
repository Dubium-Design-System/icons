import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CompassOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m8 16 2-6 6-2-2 6z"/><path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m9-9v2m0 14v2m-9-9h2m14 0h2"/></svg>
)

export default CompassOutlineIcon
