import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const EyeCheckOutlineIcon = ({
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
		<path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
		<path d="M11.102 17.957Q6.297 17.495 3 12q3.6-6 9-6t9 6a20 20 0 0 1-.663 1.032M15 19l2 2 4-4" />
	</svg>
)

export default EyeCheckOutlineIcon
