import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CircuitAmmeterOutlineIcon = ({
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
		<path d="M5 12a7 7 0 1 0 14 0 7 7 0 1 0-14 0m0 0H2m17 0h3" />
		<path d="M10 14v-3c0-1.036.895-2 2-2s2 .964 2 2v3m0-2h-4" />
	</svg>
)

export default CircuitAmmeterOutlineIcon
