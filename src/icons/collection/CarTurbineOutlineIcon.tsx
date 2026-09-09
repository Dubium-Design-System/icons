import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CarTurbineOutlineIcon = ({
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
		<path d="M7 13a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
		<path d="M18.86 11c.088.66.14 1.512.14 2a8 8 0 1 1-8-8h6" />
		<path d="M11 9q3.733.162 6 0m0-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm-6 9-3.5-1.5M11 13l2.5 3m-5 0 2.5-3m0 0 3.5-1.5M11 9v4" />
	</svg>
)

export default CarTurbineOutlineIcon
