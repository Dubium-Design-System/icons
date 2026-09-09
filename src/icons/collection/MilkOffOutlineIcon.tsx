import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MilkOffOutlineIcon = ({
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
		<path d="M10 6h6V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1m8 2 1.094 1.759a6 6 0 0 1 .906 3.17V14m0 4v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8.071a6 6 0 0 1 .906-3.17l.327-.525" />
		<path d="M10 16a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 3l18 18" />
	</svg>
)

export default MilkOffOutlineIcon
