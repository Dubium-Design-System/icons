import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DeviceAirtagOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0m5 3v.01" />
		<path d="M15 15a6 6 0 0 0-6-6m3 6a3 3 0 0 0-3-3" />
	</svg>
)

export default DeviceAirtagOutlineIcon
