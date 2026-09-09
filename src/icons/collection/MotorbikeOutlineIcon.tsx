import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MotorbikeOutlineIcon = ({
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
		<path d="M2 16a3 3 0 1 0 6 0 3 3 0 1 0-6 0m14 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0m-8.5-2h5l4-4H6m1.5 4 4-4" />
		<path d="M13 6h2l1.5 3 2 4" />
	</svg>
)

export default MotorbikeOutlineIcon
