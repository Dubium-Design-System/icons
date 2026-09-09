import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AtOffOutlineIcon = ({
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
		<path d="M9.174 9.17a4 4 0 0 0 5.646 5.668M16 12a4 4 0 0 0-4-4" />
		<path d="M19.695 15.697A2.5 2.5 0 0 0 21 13.5V12A9 9 0 0 0 7.945 3.953M5.623 5.636A9 9 0 0 0 15.5 20.28M3 3l18 18" />
	</svg>
)

export default AtOffOutlineIcon
