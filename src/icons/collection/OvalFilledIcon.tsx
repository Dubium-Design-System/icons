import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const OvalFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M12 2c3.972 0 7 4.542 7 10s-3.028 10-7 10c-3.9 0-6.89-4.379-6.997-9.703L5 12l.003-.297C5.11 6.38 8.1 2 12 2" />
	</svg>
)

export default OvalFilledIcon
