import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TimelineOutlineIcon = ({
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
		<path d="m4 16 6-7 5 5 5-6" />
		<path d="M14 14a1 1 0 1 0 2 0 1 1 0 1 0-2 0M9 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-6 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m16-8a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
	</svg>
)

export default TimelineOutlineIcon
