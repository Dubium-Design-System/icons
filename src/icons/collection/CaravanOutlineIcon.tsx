import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CaravanOutlineIcon = ({
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
		<path d="M7 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
		<path d="M11 18h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H8.5A5.5 5.5 0 0 0 3 12.5V16a2 2 0 0 0 2 2h2M8 7l7-3 1 3" />
		<path d="M13 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm7 4.5h2" />
	</svg>
)

export default CaravanOutlineIcon
