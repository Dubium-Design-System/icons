import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const RewindBackward5OutlineIcon = ({
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
		<path d="M15 18a6 6 0 1 0 0-12H4" />
		<path d="M7 9 4 6l3-3m1 17h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H8v-3h3" />
	</svg>
)

export default RewindBackward5OutlineIcon
