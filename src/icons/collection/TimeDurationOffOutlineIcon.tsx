import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TimeDurationOffOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M3 12v.01m4.5 7.79v.01M4.2 16.5v.01m0-9.01v.01M12 21a9 9 0 0 0 6.362-2.634m1.685-2.336A9 9 0 0 0 12 3M3 3l18 18" />
	</svg>
)

export default TimeDurationOffOutlineIcon
