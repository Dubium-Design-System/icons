import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HeartCogOutlineIcon = ({
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
		<path d="m12 20-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 0 1 8.21 5.697M17.001 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2-3.5V17m0 4v1.5m3.031-5.25-1.299.75m-3.463 2-1.3.75m0-3.5 1.3.75m3.463 2 1.3.75" />
	</svg>
)

export default HeartCogOutlineIcon
