import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CircuitSwitchOpenOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M2 12h2m16 0h2M4 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0m12 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-8.5-1.5L15 5" />
	</svg>
)

export default CircuitSwitchOpenOutlineIcon
