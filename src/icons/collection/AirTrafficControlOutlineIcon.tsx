import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AirTrafficControlOutlineIcon = ({
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
		<path d="M11 3h2m-1 0v3M5.998 6h12.004a2 2 0 0 1 1.916 2.575l-1.8 6A2 2 0 0 1 16.202 16H7.798a2 2 0 0 1-1.916-1.425l-1.8-6A2 2 0 0 1 5.998 6" />
		<path d="M8.5 6 10 16v5m5.5-15L14 16v5" />
	</svg>
)

export default AirTrafficControlOutlineIcon
