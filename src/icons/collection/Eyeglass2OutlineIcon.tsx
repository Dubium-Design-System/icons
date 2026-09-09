import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Eyeglass2OutlineIcon = ({
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
		<path d="M8 4H6L3 14v2.5M16 4h2l3 10v2.5M10 16h4" />
		<path d="M14 16.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0m-11 0a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0" />
	</svg>
)

export default Eyeglass2OutlineIcon
