import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CherryOutlineIcon = ({
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
		<path d="M4 16.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0M14 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
		<path d="M9 13c.366-2 1.866-3.873 4.5-5.6M17 15c-1.333-2.333-2.333-5.333-1-9" />
		<path d="M5 6q5.5-4 11 0-5.5 4-11 0" />
	</svg>
)

export default CherryOutlineIcon
