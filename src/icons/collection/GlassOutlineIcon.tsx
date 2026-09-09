import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const GlassOutlineIcon = ({
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
		<path d="M8 21h8m-4-5v5m5-16 1 6c0 3.012-2.686 5-6 5s-6-1.988-6-5l1-6" />
		<path d="M7 5a5 2 0 1 0 10 0A5 2 0 1 0 7 5" />
	</svg>
)

export default GlassOutlineIcon
