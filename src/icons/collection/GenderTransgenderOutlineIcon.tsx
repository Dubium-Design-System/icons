import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const GenderTransgenderOutlineIcon = ({
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
		<path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0m7-3 6-6m0 4V3h-4M9 9 3 3m0 4V3h4M5.5 8.5l3-3M12 16v5m-2.5-2h5" />
	</svg>
)

export default GenderTransgenderOutlineIcon
