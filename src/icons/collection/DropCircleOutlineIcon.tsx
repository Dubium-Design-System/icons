import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DropCircleOutlineIcon = ({
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
		<path d="M10.07 15.34c1.115.88 2.74.88 3.855 0s1.398-2.388.671-3.575L12 8l-2.602 3.765c-.726 1.187-.443 2.694.672 3.575" />
		<path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
	</svg>
)

export default DropCircleOutlineIcon
