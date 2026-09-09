import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ComponentsOffOutlineIcon = ({
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
		<path d="m3 12 3 3 3-3-3-3zm15.5 2.5L21 12l-3-3-2.5 2.5m-3.001-2.999L15 6l-3-3-2.5 2.5M9 18l3 3 3-3-3-3zM3 3l18 18" />
	</svg>
)

export default ComponentsOffOutlineIcon
