import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MoodPlusOutlineIcon = ({
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
		<path d="M20.985 12.528a9 9 0 1 0-8.45 8.456M16 19h6m-3-3v6M9 10h.01M15 10h.01" />
		<path d="M9.5 15c.658.64 1.56 1 2.5 1s1.842-.36 2.5-1" />
	</svg>
)

export default MoodPlusOutlineIcon
