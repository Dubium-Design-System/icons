import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const View360NumberOutlineIcon = ({
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
		<path d="M14 6a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3M3 5h2.5A1.5 1.5 0 0 1 7 6.5v1A1.5 1.5 0 0 1 5.5 9H4h1.5A1.5 1.5 0 0 1 7 10.5v1A1.5 1.5 0 0 1 5.5 13H3m14-6v4a2 2 0 1 0 4 0V7a2 2 0 1 0-4 0M3 16c0 1.657 4.03 3 9 3s9-1.343 9-3" />
	</svg>
)

export default View360NumberOutlineIcon
