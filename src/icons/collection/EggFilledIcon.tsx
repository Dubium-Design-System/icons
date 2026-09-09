import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const EggFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M12.002 2C7.829 1.992 4 8.058 4 14.083 4 18.791 7.25 22 12 22c4.727-.206 8-3.328 8-7.917C20 8.063 16.175 2.008 12.002 2" />
	</svg>
)

export default EggFilledIcon
