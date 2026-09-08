import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DiscFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M17 11a1 1 0 0 0-1 1 4 4 0 0 1-4 4 1 1 0 0 0 0 2 6 6 0 0 0 6-6 1 1 0 0 0-1-1m-5-1a2 2 0 0 0-1.995 1.85L10 12a2 2 0 1 0 2-2m0-4a6 6 0 0 0-6 6 1 1 0 0 0 2 0 4 4 0 0 1 4-4 1 1 0 0 0 0-2"/></svg>
)

export default DiscFilledIcon
