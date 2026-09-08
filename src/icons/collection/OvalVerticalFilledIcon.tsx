import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const OvalVerticalFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M12 5C6.543 5 2 8.028 2 12s4.543 7 10 7 10-3.028 10-7-4.543-7-10-7" />
	</svg>
)

export default OvalVerticalFilledIcon
