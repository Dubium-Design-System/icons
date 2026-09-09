import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CalendarUserOutlineIcon = ({
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
		<path d="M12 21H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5M16 3v4M8 3v4m-4 4h16m-3 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m5 5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2" />
	</svg>
)

export default CalendarUserOutlineIcon
