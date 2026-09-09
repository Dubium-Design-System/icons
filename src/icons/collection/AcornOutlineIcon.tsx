import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AcornOutlineIcon = ({
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
		<path d="m18 10-.45 4.1a8.36 8.36 0 0 1-5.18 6.83 1 1 0 0 1-.74 0 8.36 8.36 0 0 1-5.18-6.83L6 10m7-7a4.9 4.9 0 0 0-1 3M8 6h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1 3 3 0 0 1 3-3" />
	</svg>
)

export default AcornOutlineIcon
