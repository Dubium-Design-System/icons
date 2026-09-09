import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FiltersOutlineIcon = ({
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
		<path d="M7 8a5 5 0 1 0 10 0A5 5 0 1 0 7 8" />
		<path d="M8 11a5 5 0 1 0 3.998 1.997" />
		<path d="M12.002 19.003A5 5 0 1 0 16 11" />
	</svg>
)

export default FiltersOutlineIcon
