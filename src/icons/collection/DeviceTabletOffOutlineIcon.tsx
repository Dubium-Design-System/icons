import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DeviceTabletOffOutlineIcon = ({
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
		<path d="M7 3h11a1 1 0 0 1 1 1v11m0 4v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5" />
		<path d="M11 17a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3 3l18 18" />
	</svg>
)

export default DeviceTabletOffOutlineIcon
