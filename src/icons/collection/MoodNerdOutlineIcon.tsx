import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MoodNerdOutlineIcon = ({
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
		<path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
		<path d="M6 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0m8 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-4.5 5a3.5 3.5 0 0 0 5 0m-11-6H6m12 0h2.5M10 9.5q2-2 4 0" />
	</svg>
)

export default MoodNerdOutlineIcon
