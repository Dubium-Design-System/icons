import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CornerRightUpDoubleOutlineIcon = ({
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
		<path d="M5 19h6a3 3 0 0 0 3-3V9" />
		<path d="m10 13 4-4 4 4m-8-5 4-4 4 4" />
	</svg>
)

export default CornerRightUpDoubleOutlineIcon
