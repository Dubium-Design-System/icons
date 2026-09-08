import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CarFanAutoOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M12 12V3l4.912 1.914a1.7 1.7 0 0 1 .428 2.925zm2.044 2.624L12 12h4m-4 0H3l1.914-4.912a1.7 1.7 0 0 1 2.925-.428zm0 0v9l-4.912-1.914a1.7 1.7 0 0 1-.428-2.925zm5 9v-4a2 2 0 1 1 4 0v4m-4-2h4" />
	</svg>
)

export default CarFanAutoOutlineIcon
