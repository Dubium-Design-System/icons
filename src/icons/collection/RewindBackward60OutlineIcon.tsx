import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const RewindBackward60OutlineIcon = ({
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
		<path d="M19.007 16.466A6 6 0 0 0 15 6H4" />
		<path d="M7 9 4 6l3-3m5 12.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-3 0M9 14H7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H6" />
	</svg>
)

export default RewindBackward60OutlineIcon
