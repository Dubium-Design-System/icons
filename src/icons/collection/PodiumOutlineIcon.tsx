import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PodiumOutlineIcon = ({
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
		<path d="M5 8h14l-.621 2.485A2 2 0 0 1 16.439 12H7.561a2 2 0 0 1-1.94-1.515zm2 0V6a3 3 0 0 1 3-3m-2 9 1 9m7-9-1 9m-8 0h10" />
	</svg>
)

export default PodiumOutlineIcon
