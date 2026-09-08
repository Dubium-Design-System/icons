import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PanoramaVerticalFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M17.53 2c1.39 0 2.364 1.389 1.87 2.692l-.013.026-.156.431c-1.623 4.572-1.622 9.123.003 13.703l.168.458A2 2 0 0 1 17.529 22h-11c-1.386 0-2.394-1.386-1.897-2.694 1.845-4.879 1.845-9.734 0-14.612C4.137 3.39 5.112 2 6.502 2z"/></svg>
)

export default PanoramaVerticalFilledIcon
