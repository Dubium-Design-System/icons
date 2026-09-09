import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const GasStationOffOutlineIcon = ({
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
		<path d="M15 11a2 2 0 0 1 2 2m3 3V9l-3-3M4 20V6c0-.548.22-1.044.577-1.405M8 4h4a2 2 0 0 1 2 2v4m0 4v6M3 20h12" />
		<path d="M18 7v1a1 1 0 0 0 1 1h1M4 11h7M3 3l18 18" />
	</svg>
)

export default GasStationOffOutlineIcon
