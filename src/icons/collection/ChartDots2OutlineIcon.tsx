import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ChartDots2OutlineIcon = ({
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
		<path d="M3 3v18h18" />
		<path d="M7 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0m4-10a2 2 0 1 0 4 0 2 2 0 1 0-4 0m5 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0m5-9-6 1.5m-.887 2.15 2.771 3.695M16 12.5l-5 2" />
	</svg>
)

export default ChartDots2OutlineIcon
