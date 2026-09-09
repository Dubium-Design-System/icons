import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Pointer2OutlineIcon = ({
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
		<path d="m14.185 13.14 5.644-2.202c1.625-.634 1.538-2.962-.13-3.473L5.38 3.083c-1.41-.431-2.73.888-2.298 2.298l4.382 14.318c.51 1.668 2.84 1.755 3.473.13l2.202-5.644a1.84 1.84 0 0 1 1.045-1.045" />
	</svg>
)

export default Pointer2OutlineIcon
