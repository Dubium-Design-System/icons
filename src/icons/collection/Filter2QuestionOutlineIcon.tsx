import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Filter2QuestionOutlineIcon = ({
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
		<path d="M4 6h16M6 12h10.5M9 18h5m5 4v.01M19 19a2 2 0 0 0 1.941-1.532 2.006 2.006 0 0 0-1.027-2.25 1.98 1.98 0 0 0-2.414.483" />
	</svg>
)

export default Filter2QuestionOutlineIcon
