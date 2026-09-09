import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const RepeatOffOutlineIcon = ({
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
		<path d="M4 12V9a3 3 0 0 1 2.08-2.856M10 6h10m-3-3 3 3-3 3m3 3v3a3 3 0 0 1-.133.886m-1.99 1.984A3 3 0 0 1 17 18H4m3 3-3-3 3-3M3 3l18 18" />
	</svg>
)

export default RepeatOffOutlineIcon
