import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Percentage80OutlineIcon = ({
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
		<path fill={color} stroke="none" d="M12 3a9 9 0 1 1-8.497 6.025L12 12z" />
		<path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
	</svg>
)

export default Percentage80OutlineIcon
