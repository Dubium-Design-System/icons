import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SteeringWheelOffOutlineIcon = ({
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
		<path d="M20.04 16.048A9 9 0 0 0 7.957 3.958m-2.32 1.678a9 9 0 1 0 12.737 12.719" />
		<path d="M10.595 10.576a2 2 0 1 0 2.827 2.83M12 14v7m-2-9-6.75-2m12.292 1.543L20.75 10M3 3l18 18" />
	</svg>
)

export default SteeringWheelOffOutlineIcon
