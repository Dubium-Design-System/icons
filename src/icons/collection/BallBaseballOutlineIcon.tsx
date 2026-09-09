import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BallBaseballOutlineIcon = ({
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
		<path d="M5.636 18.364A9 9 0 1 0 18.364 5.636 9 9 0 0 0 5.636 18.364" />
		<path d="M12.495 3.02a9 9 0 0 1-9.475 9.475m17.96-.99a9 9 0 0 0-9.475 9.475M9 9l2 2m2 2 2 2m-4-8 2 1m-6 3 1 2m8-2 1 2m-6 3 2 1" />
	</svg>
)

export default BallBaseballOutlineIcon
