import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WorldOutlineIcon = ({
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
		<path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0m.6-3h16.8M3.6 15h16.8" />
		<path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18" />
	</svg>
)

export default WorldOutlineIcon
