import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WheelchairOffOutlineIcon = ({
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
		<path d="M3 16a5 5 0 1 0 10 0 5 5 0 1 0-10 0m14.582 1.59a2 2 0 0 0 2.833 2.824M14 14h-1.4M6 6v5m0-3h2m4 0h5m-2 0v3M3 3l18 18" />
	</svg>
)

export default WheelchairOffOutlineIcon
