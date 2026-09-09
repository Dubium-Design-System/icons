import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SkateboardOutlineIcon = ({
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
		<path d="M5 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 9a2 1 0 0 0 2 1h14a2 1 0 0 0 2-1" />
	</svg>
)

export default SkateboardOutlineIcon
