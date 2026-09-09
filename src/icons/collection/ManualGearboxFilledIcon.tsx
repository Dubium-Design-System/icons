import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ManualGearboxFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M19 3a3 3 0 0 1 1 5.829V10a3 3 0 0 1-3 3h-4v2.171A3.001 3.001 0 1 1 9 18l.005-.176A3 3 0 0 1 11 15.17V13H6v2.171A3.001 3.001 0 1 1 2 18l.005-.176A3 3 0 0 1 4 15.17V8.829A3 3 0 0 1 2 6l.005-.176a3 3 0 1 1 3.996 3.005L6 11h5V8.83A3 3 0 0 1 9 6l.005-.176a3 3 0 1 1 3.996 3.005L13 11h4a1 1 0 0 0 1-1V8.83A3 3 0 0 1 16 6l.005-.176A3 3 0 0 1 19 3" />
	</svg>
)

export default ManualGearboxFilledIcon
