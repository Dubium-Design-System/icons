import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BinaryTreeOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	strokeWidth = "var(--icon-stroke-width, 1.5px)",
	...svgProps
}: IStrokeIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={strokeWidth}
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M6 20a2 2 0 1 0-4 0 2 2 0 0 0 4 0M16 4a2 2 0 1 0-4 0 2 2 0 0 0 4 0m0 16a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-5-8a2 2 0 1 0-4 0 2 2 0 0 0 4 0m10 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0M5.058 18.306l2.88-4.606m2.123-3.397 2.877-4.604m-2.873 8.006 2.876 4.6M15.063 5.7l2.881 4.61" />
	</svg>
)

export default BinaryTreeOutlineIcon
