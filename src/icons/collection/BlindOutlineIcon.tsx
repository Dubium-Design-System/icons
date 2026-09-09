import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BlindOutlineIcon = ({
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
		<path d="M9 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0M4 21l3-4m6 4-2-4-3-3 1-6" />
		<path d="m3 12 2-3 4-1 6 4m1.5 2 3.5 7" />
	</svg>
)

export default BlindOutlineIcon
