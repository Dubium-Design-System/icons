import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BatteryAutomotiveFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M18 2a1 1 0 0 1 1 1v1a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3V3a1 1 0 1 1 2 0v1h10V3a1 1 0 0 1 1-1m-2 7.5a1 1 0 0 0-1 1v.5h-.5a1 1 0 0 0 0 2h.5v.5a1 1 0 0 0 2 0V13h.5a1 1 0 0 0 0-2H17v-.5a1 1 0 0 0-1-1M9.5 11h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2" />
	</svg>
)

export default BatteryAutomotiveFilledIcon
