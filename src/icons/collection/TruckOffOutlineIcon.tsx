import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TruckOffOutlineIcon = ({
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
		<path d="M5 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0m10.585-1.414a2 2 0 0 0 2.826 2.831" />
		<path d="M5 17H3V6a1 1 0 0 1 1-1h1m3.96 0H13v4m0 4v4m-4 0h6m6 0v-6h-6m-2-5h5l3 5M3 3l18 18" />
	</svg>
)

export default TruckOffOutlineIcon
