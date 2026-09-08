import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CircleArrowDownLeftFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34M9 8a1 1 0 0 0-1 1v6l.007.117.029.149.035.105.054.113.071.111q.044.06.097.112l.09.08.096.067.098.052.11.044.112.03.126.017L15 16l.117-.007A1 1 0 0 0 16 15l-.007-.117A1 1 0 0 0 15 14h-3.586l4.293-4.293.083-.094a1 1 0 0 0-1.497-1.32L10 12.584V9l-.007-.117A1 1 0 0 0 9 8"/></svg>
)

export default CircleArrowDownLeftFilledIcon
