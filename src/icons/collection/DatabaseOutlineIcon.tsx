import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DatabaseOutlineIcon = ({
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
		<path d="M4 6a8 3 0 1 0 16 0A8 3 0 1 0 4 6" />
		<path d="M4 6v6a8 3 0 0 0 16 0V6" />
		<path d="M4 12v6a8 3 0 0 0 16 0v-6" />
	</svg>
)

export default DatabaseOutlineIcon
