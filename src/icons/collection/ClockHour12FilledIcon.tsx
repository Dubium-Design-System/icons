import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ClockHour12FilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M12 6a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1" />
	</svg>
)

export default ClockHour12FilledIcon
