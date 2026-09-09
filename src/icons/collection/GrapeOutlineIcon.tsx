import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const GrapeOutlineIcon = ({
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
		<path d="M13 3a14.5 14.5 0 0 0-1 6" />
		<path d="M12 8.9s-2.77.52-4.1-.8-.8-4-.8-4 2.57-.53 3.88.8 1.02 4 1.02 4M14 19a2 2 0 1 0-4 0 2 2 0 0 0 4 0m0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
		<path d="M10 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4m2-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
		<path d="M16 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4m-8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
	</svg>
)

export default GrapeOutlineIcon
