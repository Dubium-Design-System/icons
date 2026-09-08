import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const GrowthOutlineIcon = ({
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
		<path d="M16.5 15a4.5 4.5 0 0 0-4.5 4.5m4.5-8.5a4.5 4.5 0 0 0-4.5 4.5M16.5 7a4.5 4.5 0 0 0-4.5 4.5M8 15c2.21 0 4 2.015 4 4.5M8 11c2.21 0 4 2.015 4 4.5M8 7c2.21 0 4 2.015 4 4.5M12 4v6" />
	</svg>
)

export default GrowthOutlineIcon
