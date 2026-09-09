import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WheelchairOutlineIcon = ({
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
		<path d="M3 16a5 5 0 1 0 10 0 5 5 0 1 0-10 0m14 3a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
		<path d="M19 17a3 3 0 0 0-3-3h-3.4M3 3h1a2 2 0 0 1 2 2v6m0-3h11m-2 0v6" />
	</svg>
)

export default WheelchairOutlineIcon
