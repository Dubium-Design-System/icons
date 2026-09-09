import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BleachChlorineOutlineIcon = ({
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
		<path d="M5 19h14a2 2 0 0 0 1.84-2.75L13.74 4a2 2 0 0 0-3.5 0l-7.1 12.25A2 2 0 0 0 4.89 19" />
		<path d="M11 12h-1a2 2 0 1 0 0 4h1m3-4v4h2" />
	</svg>
)

export default BleachChlorineOutlineIcon
