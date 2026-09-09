import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const IdOffOutlineIcon = ({
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
		<path d="M8 4h10a3 3 0 0 1 3 3v10m-1.437 2.561c-.455.279-.99.439-1.563.439H6a3 3 0 0 1-3-3V7c0-1.083.573-2.031 1.433-2.559" />
		<path d="M8.175 8.178a2 2 0 1 0 2.646 2.65M15 8h2m-1 4h1M7 16h9M3 3l18 18" />
	</svg>
)

export default IdOffOutlineIcon
