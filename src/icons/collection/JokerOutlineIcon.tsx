import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const JokerOutlineIcon = ({
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
		<path d="M5 17.5A1.5 1.5 0 0 1 6.5 16h11a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 17.5m7-1.5Q9.5 8 6 8q-2.5 0-3 2c2.953.31 3.308 3.33 4 6m5 0q2.5-8 6-8 2.5 0 3 2c-2.953.31-3.308 3.33-4 6" />
		<path d="M9 9.5Q11 6 12 6t3 3.5" />
	</svg>
)

export default JokerOutlineIcon
