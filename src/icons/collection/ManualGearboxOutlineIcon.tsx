import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ManualGearboxOutlineIcon = ({
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
		<path d="M3 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m7 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0m7 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0m7 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0M5 8v8m7-8v8" />
		<path d="M19 8v2a2 2 0 0 1-2 2H5" />
	</svg>
)

export default ManualGearboxOutlineIcon
