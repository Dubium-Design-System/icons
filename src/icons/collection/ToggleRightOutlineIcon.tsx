import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ToggleRightOutlineIcon = ({
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
		<path d="M14 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
		<path d="M2 12a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6 6 6 0 0 1-6 6H8a6 6 0 0 1-6-6" />
	</svg>
)

export default ToggleRightOutlineIcon
