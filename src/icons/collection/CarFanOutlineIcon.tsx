import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CarFanOutlineIcon = ({
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
		<path d="M12 12V3l4.912 1.914a1.7 1.7 0 0 1 .428 2.925zm0 0h9l-1.914 4.912a1.7 1.7 0 0 1-2.925.428zm0 0H3l1.914-4.912a1.7 1.7 0 0 1 2.925-.428zm0 0v9l-4.912-1.914a1.7 1.7 0 0 1-.428-2.925z" />
	</svg>
)

export default CarFanOutlineIcon
