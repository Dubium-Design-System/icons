import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const LassoPolygonOutlineIcon = ({
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
		<path d="M4.028 13.252 3 10l2-7 7 5 8-3 1 9-9 3-5.144-1.255" />
		<path d="M3 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
		<path d="M5 17c0 1.42.316 2.805 1 4" />
	</svg>
)

export default LassoPolygonOutlineIcon
