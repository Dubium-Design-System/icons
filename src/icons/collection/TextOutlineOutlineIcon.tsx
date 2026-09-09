import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TextOutlineOutlineIcon = ({
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
		<path d="M3 8V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1M3 16v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1m.01-4h.01M3.01 12h.01M10 15v-4a2 2 0 1 1 4 0v4m-4-2h4" />
	</svg>
)

export default TextOutlineOutlineIcon
