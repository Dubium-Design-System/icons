import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const RewindBackward30OutlineIcon = ({
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
		<path d="M19.007 16.466A6 6 0 0 0 15 6H4m8 9.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-3 0M6 14h1.5a1.5 1.5 0 0 1 0 3H7h.5a1.5 1.5 0 0 1 0 3H6" />
		<path d="M7 9 4 6l3-3" />
	</svg>
)

export default RewindBackward30OutlineIcon
