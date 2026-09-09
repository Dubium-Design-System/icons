import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const RewindForward15OutlineIcon = ({
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
		<path d="m17 9 3-3-3-3" />
		<path d="M9 18A6 6 0 1 1 9 6h11m-4 14h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2v-3h3m-6 0v6" />
	</svg>
)

export default RewindForward15OutlineIcon
