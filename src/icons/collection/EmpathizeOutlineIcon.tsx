import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const EmpathizeOutlineIcon = ({
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
		<path d="M9.5 5.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0M12 21.368l5.095-5.096a3.088 3.088 0 1 0-4.367-4.367l-.728.727-.728-.727a3.088 3.088 0 1 0-4.367 4.367z" />
	</svg>
)

export default EmpathizeOutlineIcon
