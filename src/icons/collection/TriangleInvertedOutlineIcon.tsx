import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TriangleInvertedOutlineIcon = ({
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
		<path d="M10.363 20.405 2.257 6.871A1.914 1.914 0 0 1 3.893 4h16.214a1.914 1.914 0 0 1 1.636 2.871l-8.106 13.534a1.914 1.914 0 0 1-3.274 0" />
	</svg>
)

export default TriangleInvertedOutlineIcon
