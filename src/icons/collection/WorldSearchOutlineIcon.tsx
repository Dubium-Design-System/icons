import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WorldSearchOutlineIcon = ({
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
		<path d="M21 12a9 9 0 1 0-9 9M3.6 9h16.8M3.6 15h7.9" />
		<path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 2.574 8.62M15 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0m5.2 2.2L22 22" />
	</svg>
)

export default WorldSearchOutlineIcon
