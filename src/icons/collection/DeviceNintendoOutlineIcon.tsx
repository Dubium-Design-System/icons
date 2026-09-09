import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DeviceNintendoOutlineIcon = ({
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
		<path d="M10 20V4H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4zm4 0V4h3a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4z" />
		<path fill={color} d="M16.5 15.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-11-7a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
	</svg>
)

export default DeviceNintendoOutlineIcon
