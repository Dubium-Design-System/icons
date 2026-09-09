import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SportBilliardOutlineIcon = ({
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
		<path d="M10 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
		<path d="M10 14a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
		<path d="M4 12a8 8 0 1 0 16 0 8 8 0 1 0-16 0" />
	</svg>
)

export default SportBilliardOutlineIcon
