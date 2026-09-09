import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CircuitChangeoverOutlineIcon = ({
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
		<path d="M2 12h2m16-5h2M4 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0m12-5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m4 10h2m-6 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-8.5-6.5L16 7" />
	</svg>
)

export default CircuitChangeoverOutlineIcon
