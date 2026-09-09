import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PokerChipOutlineIcon = ({
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
		<path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
		<path d="M7 12a5 5 0 1 0 10 0 5 5 0 1 0-10 0m5-9v4m0 10v4m-9-9h4m10 0h4m-2.636-6.364-2.828 2.828m-7.072 7.072-2.828 2.828m0-12.728 2.828 2.828m7.072 7.072 2.828 2.828" />
	</svg>
)

export default PokerChipOutlineIcon
