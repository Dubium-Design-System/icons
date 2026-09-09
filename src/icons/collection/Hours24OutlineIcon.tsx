import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Hours24OutlineIcon = ({
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
		<path d="M4 13c.325 2.532 1.881 4.781 4 6m12-8A8.1 8.1 0 0 0 4.5 9" />
		<path d="M4 5v4h4m4 6h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2m3-6v2a1 1 0 0 0 1 1h1m1-3v6" />
	</svg>
)

export default Hours24OutlineIcon
