import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ClockHour8FilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M12 6a1 1 0 0 0-1 1v4.464l-2.555 1.704a1 1 0 0 0-.336 1.286l.059.1a1 1 0 0 0 1.387.278l3.027-2.018.087-.07.074-.075.075-.094.052-.08.035-.07.051-.132.031-.135.01-.082L13 12V7a1 1 0 0 0-1-1" />
	</svg>
)

export default ClockHour8FilledIcon
