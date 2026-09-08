import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MathMaxOutlineIcon = ({
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
		<path d="M5 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
		<path d="M3 15s.616-5.544 2.332-7.93m3.305.042C11.354 10.425 14.519 20 17 20q3 0 4-9" />
	</svg>
)

export default MathMaxOutlineIcon
