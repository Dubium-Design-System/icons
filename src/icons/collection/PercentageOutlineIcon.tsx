import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PercentageOutlineIcon = ({
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
		<path d="M16 17a1 1 0 1 0 2 0 1 1 0 1 0-2 0M6 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 11L18 6" />
	</svg>
)

export default PercentageOutlineIcon
