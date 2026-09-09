import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Focus2OutlineIcon = ({
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
		<path fill={color} d="M11.5 12a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0" />
		<path d="M5 12a7 7 0 1 0 14 0 7 7 0 1 0-14 0m7-9v2m-9 7h2m7 7v2m7-9h2" />
	</svg>
)

export default Focus2OutlineIcon
