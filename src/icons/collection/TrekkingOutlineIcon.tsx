import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TrekkingOutlineIcon = ({
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
		<path d="M11 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M7 21l2-4m4 4v-4l-3-3 1-6 3 4 3 2" />
		<path d="m10 14-1.827-1.218a2 2 0 0 1-.831-2.15l.28-1.117A2 2 0 0 1 9.561 8H11l4 1 3-2m-1 5v9m-1-1h2" />
	</svg>
)

export default TrekkingOutlineIcon
