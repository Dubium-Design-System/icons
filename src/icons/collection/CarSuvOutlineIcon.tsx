import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CarSuvOutlineIcon = ({
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
		<path d="M5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0m11 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0M5 9l2-4h7.438a2 2 0 0 1 1.94 1.515L17 9h3a2 2 0 0 1 2 2v3M10 9V5M2 7v4" />
		<path d="M22.001 14.001A5 5 0 0 0 18 12a5 5 0 0 0-4 2h-3a4.998 4.998 0 0 0-8.003.003" />
		<path d="M5 12V9h13" />
	</svg>
)

export default CarSuvOutlineIcon
