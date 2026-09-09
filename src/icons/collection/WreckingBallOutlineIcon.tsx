import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WreckingBallOutlineIcon = ({
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
		<path d="M17 13a2 2 0 1 0 4 0 2 2 0 1 0-4 0M2 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0m9 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2 2H4m0-4h9" />
		<path d="M8 12V7h2a3 3 0 0 1 3 3v5" />
		<path d="M5 15v-2a1 1 0 0 1 1-1h7m6-1V4l-6 7" />
	</svg>
)

export default WreckingBallOutlineIcon
