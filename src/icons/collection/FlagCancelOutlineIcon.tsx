import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FlagCancelOutlineIcon = ({
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
		<path d="M13.342 14.941A5 5 0 0 1 12 14a5 5 0 0 0-7 0V5a5 5 0 0 1 7 0 5 5 0 0 0 7 0v7M5 21v-7m11 5a3 3 0 1 0 6 0 3 3 0 1 0-6 0m1 2 4-4" />
	</svg>
)

export default FlagCancelOutlineIcon
