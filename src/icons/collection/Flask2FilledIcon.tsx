import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Flask2FilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M15 2a1 1 0 0 1 0 2v5.674l.062.03a7 7 0 0 1 3.85 5.174l.037.262a7 7 0 0 1-3.078 6.693 1 1 0 0 1-.553.167H8.683a1 1 0 0 1-.552-.166A7 7 0 0 1 8.938 9.7L9 9.672V4a1 1 0 1 1 0-2zm-2 2h-2v6.34a1 1 0 0 1-.551.894l-.116.049A5 5 0 0 0 7.413 14h9.172a5 5 0 0 0-2.918-2.715 1 1 0 0 1-.667-.943z"/></svg>
)

export default Flask2FilledIcon
