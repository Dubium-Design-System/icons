import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Rotate3dOutlineIcon = ({
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
		<path d="M12 3a7 7 0 0 1 7 7v4l-3-3m6 0-3 3M8 15.5l-5-3 5-3 5 3V18l-5 3z" />
		<path d="M3 12.5V18l5 3m0-5.455 5-3.03" />
	</svg>
)

export default Rotate3dOutlineIcon
