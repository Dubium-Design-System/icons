import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Percentage33OutlineIcon = ({
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
		<path fill={color} stroke="none" d="M12 3a9 9 0 0 1 7.794 13.5l-7.79-4.497v-9" />
		<path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
	</svg>
)

export default Percentage33OutlineIcon
