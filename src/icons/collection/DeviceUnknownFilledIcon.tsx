import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DeviceUnknownFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-5 13a1 1 0 0 0-1 1v.01a1 1 0 0 0 2 0V16a1 1 0 0 0-1-1m1.368-6.673a2.98 2.98 0 0 0-3.631.728 1 1 0 0 0 1.526 1.292.98.98 0 0 1 1.195-.239A1 1 0 0 1 12.003 12a1 1 0 0 0-.006 2 3 3 0 0 0 1.371-5.673"/></svg>
)

export default DeviceUnknownFilledIcon
