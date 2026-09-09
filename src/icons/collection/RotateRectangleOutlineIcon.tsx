import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const RotateRectangleOutlineIcon = ({
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
		<path d="m10.09 4.01.496-.495a2 2 0 0 1 2.828 0l7.071 7.07a2 2 0 0 1 0 2.83l-7.07 7.07a2 2 0 0 1-2.83 0l-7.07-7.07a2 2 0 0 1 0-2.83L7.05 7.05H3.062m3.988 3.988V7.05" />
	</svg>
)

export default RotateRectangleOutlineIcon
