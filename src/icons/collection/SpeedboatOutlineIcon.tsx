import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SpeedboatOutlineIcon = ({
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
		<path d="M2 17h14.4a3 3 0 0 0 2.5-1.34L22 11h-6.23a4 4 0 0 0-1.49.29l-3.56 1.42a4 4 0 0 1-1.49.29H3.5zm4-4 1.5-5" />
		<path d="M6 8h8l2 3" />
	</svg>
)

export default SpeedboatOutlineIcon
