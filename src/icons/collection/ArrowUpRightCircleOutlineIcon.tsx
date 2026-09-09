import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ArrowUpRightCircleOutlineIcon = ({
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
		<path d="M8.464 15.536 18 6m0 4V6h-4m-5.586 9.586a2 2 0 1 0-2.828 2.828 2 2 0 0 0 2.828-2.828" />
	</svg>
)

export default ArrowUpRightCircleOutlineIcon
