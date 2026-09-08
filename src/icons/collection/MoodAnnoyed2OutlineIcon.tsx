import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MoodAnnoyed2OutlineIcon = ({
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
		<path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18" />
		<path d="M15 14c-2 0-3 1-3.5 2.05M10 9.25c-.5 1-2.5 1-3 0m10 0c-.5 1-2.5 1-3 0" />
	</svg>
)

export default MoodAnnoyed2OutlineIcon
