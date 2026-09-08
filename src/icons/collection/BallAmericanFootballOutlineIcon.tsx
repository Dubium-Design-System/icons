import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BallAmericanFootballOutlineIcon = ({
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
		<path d="m15 9-6 6m1-3 2 2m0-4 2 2m-6 9a5 5 0 0 0-5-5" />
		<path d="M16 3C8.82 3 3 8.82 3 16a5 5 0 0 0 5 5c7.18 0 13-5.82 13-13a5 5 0 0 0-5-5" />
		<path d="M16 3a5 5 0 0 0 5 5" />
	</svg>
)

export default BallAmericanFootballOutlineIcon
