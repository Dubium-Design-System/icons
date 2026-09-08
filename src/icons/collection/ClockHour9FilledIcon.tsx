import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ClockHour9FilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-4.883 9.653A1 1 0 0 0 13 12V7a1 1 0 0 0-2 0v4H8.5a1 1 0 0 0-.993.883L7.5 12a1 1 0 0 0 1 1H12z" />
	</svg>
)

export default ClockHour9FilledIcon
