import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandSpaceheyOutlineIcon = ({
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
		<path d="M15 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-1 14h6v-6a3 3 0 0 0-6 0zM11 8v2.5A3.5 3.5 0 0 1 7.5 14H7a3 3 0 0 1 0-6z" />
	</svg>
)

export default BrandSpaceheyOutlineIcon
