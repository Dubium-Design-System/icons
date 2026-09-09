import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MoodXOutlineIcon = ({
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
		<path d="M20.983 12.556a9 9 0 1 0-8.433 8.427M9 10h.01M15 10h.01" />
		<path d="M9.5 15c.658.64 1.56 1 2.5 1q.292 0 .574-.045M21.5 21.5l-5-5m0 5 5-5" />
	</svg>
)

export default MoodXOutlineIcon
