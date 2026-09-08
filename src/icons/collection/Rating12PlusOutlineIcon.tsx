import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Rating12PlusOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m4 3V9m8.5 3h3M17 10.5v3"/><path d="M10 10.5a1.5 1.5 0 0 1 3 0c0 .443-.313.989-.612 1.393L10 15h3"/></svg>
)

export default Rating12PlusOutlineIcon
