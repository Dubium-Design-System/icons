import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MoodTongueWink2OutlineIcon = ({
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
		<path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18m3-11h-.01" />
		<path d="M10 14v2a2 2 0 1 0 4 0v-2m1.5 0h-7M7 10c.5-1 2.5-1 3 0" />
	</svg>
)

export default MoodTongueWink2OutlineIcon
