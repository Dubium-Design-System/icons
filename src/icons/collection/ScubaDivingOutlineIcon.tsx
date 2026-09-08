import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ScubaDivingOutlineIcon = ({
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
		<path d="M19 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0M2 2l3 3 1.5 4 3.5 2 6 2 1 4 2.5 3M11 8l4.5 1.5" />
	</svg>
)

export default ScubaDivingOutlineIcon
