import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const GeometryOutlineIcon = ({
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
		<path d="m7 21 4-12m2 0 1.48 4.439m.949 2.847L17 21M10 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-6 5c1.526 2.955 4.588 5 8 5 3.41 0 6.473-2.048 8-5m-8-7V3" />
	</svg>
)

export default GeometryOutlineIcon
