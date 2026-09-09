import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const GlassGinOutlineIcon = ({
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
		<path d="M8 21h8m-4-6v6M5.5 5a6.5 2 0 1 0 13 0 6.5 2 0 1 0-13 0" />
		<path d="M5.75 4.5C5.138 5.25 5 6.5 5 8a7 7 0 0 0 14 0c0-1.5-.094-2.75-.75-3.5" />
	</svg>
)

export default GlassGinOutlineIcon
