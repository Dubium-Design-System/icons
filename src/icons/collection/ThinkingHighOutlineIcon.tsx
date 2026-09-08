import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ThinkingHighOutlineIcon = ({
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
		<path d="M17 21v-1.25c0-2.311.778-1.92 2.244-3.749A8 8 0 1 0 5 11q0 .25-1.876 3.518A1 1 0 0 0 4 16h2v3a2 2 0 0 0 2 2h3" />
		<path d="M9 11a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
	</svg>
)

export default ThinkingHighOutlineIcon
