import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MoodCheckOutlineIcon = ({
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
		<path d="M20.925 13.163A8.998 8.998 0 0 0 12 3a9 9 0 0 0 0 18M9 10h.01M15 10h.01" />
		<path d="M9.5 15c.658.64 1.56 1 2.5 1s1.842-.36 2.5-1m.5 4 2 2 4-4" />
	</svg>
)

export default MoodCheckOutlineIcon
