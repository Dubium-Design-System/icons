import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CodeCircle2OutlineIcon = ({
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
		<path d="M8.5 13.5 7 12l1.5-1.5m7 0L17 12l-1.5 1.5" />
		<path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m10-2.5L11 15" />
	</svg>
)

export default CodeCircle2OutlineIcon
