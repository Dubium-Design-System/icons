import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const EmergencyBedOutlineIcon = ({
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
		<path d="M14 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-8 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 8l2.1 2.8A3 3 0 0 0 8.5 12H20M10 6h4m-2-2v4" />
		<path d="M12 12v2l-2.5 2.5m5 0L12 14" />
	</svg>
)

export default EmergencyBedOutlineIcon
