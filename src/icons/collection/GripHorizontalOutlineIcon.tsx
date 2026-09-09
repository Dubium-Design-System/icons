import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const GripHorizontalOutlineIcon = ({
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
		<path d="M4 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 6a1 1 0 1 0 2 0 1 1 0 1 0-2 0m7-6a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 6a1 1 0 1 0 2 0 1 1 0 1 0-2 0m7-6a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 6a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
	</svg>
)

export default GripHorizontalOutlineIcon
