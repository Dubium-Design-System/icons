import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CutOutlineIcon = ({
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
		<path d="M4 17a3 3 0 1 0 6 0 3 3 0 1 0-6 0m10 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0m-4.85-2.15L18 4M6 4l8.85 10.85" />
	</svg>
)

export default CutOutlineIcon
