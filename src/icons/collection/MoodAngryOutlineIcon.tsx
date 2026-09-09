import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MoodAngryOutlineIcon = ({
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
		<path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18M8 9l2 1m6-1-2 1" />
		<path d="M14.5 16.05a3.5 3.5 0 0 0-5 0" />
	</svg>
)

export default MoodAngryOutlineIcon
