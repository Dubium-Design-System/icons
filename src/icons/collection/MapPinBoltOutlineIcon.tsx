import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MapPinBoltOutlineIcon = ({
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
		<path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
		<path d="M13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 13.591-4.629M19 16l-2 3h4l-2 3" />
	</svg>
)

export default MapPinBoltOutlineIcon
