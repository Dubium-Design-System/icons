import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const GenderGenderfluidOutlineIcon = ({
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
		<path d="M10 15.464a4 4 0 1 0 4-6.928 4 4 0 0 0-4 6.928M15.464 14l3-5.196M5.536 15.195l3-5.196M12 12h.01M9 9 3 3m2.5 5.5 3-3M21 21l-6-6m2 5 3-3M3 7V3h4" />
	</svg>
)

export default GenderGenderfluidOutlineIcon
