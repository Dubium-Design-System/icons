import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BreadOutlineIcon = ({
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
		<path d="M18 4a3 3 0 0 1 2 5.235V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9.236a3 3 0 0 1 1.824-5.231H18z" />
	</svg>
)

export default BreadOutlineIcon
