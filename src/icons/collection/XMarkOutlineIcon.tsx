import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const XMarkOutlineIcon = ({
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
		<path d="m12 16 3.644 3.644a1.21 1.21 0 0 0 1.712 0l2.288-2.288a1.21 1.21 0 0 0 0-1.712L16 12l3.644-3.644a1.21 1.21 0 0 0 0-1.712l-2.288-2.288a1.21 1.21 0 0 0-1.712 0L12 8 8.356 4.356a1.21 1.21 0 0 0-1.712 0L4.356 6.644a1.21 1.21 0 0 0 0 1.712L8 12l-3.644 3.644a1.21 1.21 0 0 0 0 1.712l2.288 2.288a1.21 1.21 0 0 0 1.712 0z" />
	</svg>
)

export default XMarkOutlineIcon
