import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MoodSmileDizzyOutlineIcon = ({
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
		<path d="M14.5 15a3.5 3.5 0 0 1-5 0M8 9l2 2m0-2-2 2m6-2 2 2m0-2-2 2" />
	</svg>
)

export default MoodSmileDizzyOutlineIcon
