import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const RunOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M11.007 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 17l5 1 .75-1.5M15 21v-4l-4-3 1-6" />
		<path d="M7 12V9l5-1 3 3 3 1" />
	</svg>
)

export default RunOutlineIcon
