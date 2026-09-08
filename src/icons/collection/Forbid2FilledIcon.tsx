import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Forbid2FilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34m-1.293 4.953a1 1 0 0 0-1.414 0l-6 6-.083.094a1 1 0 0 0 1.497 1.32l6-6 .083-.094a1 1 0 0 0-.083-1.32"/></svg>
)

export default Forbid2FilledIcon
