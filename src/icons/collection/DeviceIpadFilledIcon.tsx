import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DeviceIpadFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M18 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-3 16H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2"/></svg>
)

export default DeviceIpadFilledIcon
