import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CirclePercentageFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1-20 0l.004-.28C2.152 6.327 6.57 2 12 2m3 12.12a1 1 0 0 0-1 1v.015a1 1 0 0 0 2 0v-.015a1 1 0 0 0-1-1m.707-5.752a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414M9 8.105a1 1 0 0 0-1 1v.015a1 1 0 1 0 2 0v-.015a1 1 0 0 0-1-1"/></svg>
)

export default CirclePercentageFilledIcon
