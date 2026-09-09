import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PolygonOffOutlineIcon = ({
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
		<path d="M10 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m7 3a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 11a2 2 0 1 0 4 0 2 2 0 1 0-4 0m10 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0M6.5 9.5l1.546-1.311M14 5.5 17 7m1.5 3-1.185 3.318m-1.062 2.972L16 17m-2.5.5-7-5M3 3l18 18" />
	</svg>
)

export default PolygonOffOutlineIcon
