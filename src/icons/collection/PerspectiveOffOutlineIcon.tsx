import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PerspectiveOffOutlineIcon = ({
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
		<path d="m8.511 4.502 9.63 1.375a1 1 0 0 1 .859.99V15m-.859 3.123-12 1.714A1 1 0 0 1 5 18.847V5.153a1 1 0 0 1 .01-.137M3 3l18 18" />
	</svg>
)

export default PerspectiveOffOutlineIcon
