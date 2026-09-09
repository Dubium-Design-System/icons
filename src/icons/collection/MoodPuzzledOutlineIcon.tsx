import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MoodPuzzledOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	strokeWidth = "var(--icon-stroke-width, 1.5px)",
	...svgProps
}: IStrokeIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={strokeWidth}
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M14.986 3.51A9 9 0 1 0 16.5 19.794c2.489-1.437 4.181-3.978 4.5-6.794m-11-3h.01M14 8h.01" />
		<path d="M12 15q1.5-2 3-2m5-4v.01M20 6a2.003 2.003 0 0 0 .914-3.782 1.98 1.98 0 0 0-2.414.483" />
	</svg>
)

export default MoodPuzzledOutlineIcon
