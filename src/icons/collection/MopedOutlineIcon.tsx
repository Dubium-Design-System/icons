import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MopedOutlineIcon = ({
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
		<path d="M16 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M5 16v1a2 2 0 0 0 4 0v-5H6a3 3 0 0 0-3 3v1h10a6 6 0 0 1 5-4V7a2 2 0 0 0-2-2h-1M6 9h3" />
	</svg>
)

export default MopedOutlineIcon
