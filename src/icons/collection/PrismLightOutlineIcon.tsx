import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PrismLightOutlineIcon = ({
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
		<path d="M4.731 19H16.27a1 1 0 0 0 .866-1.5l-5.769-10a1 1 0 0 0-1.732 0l-5.769 10a1 1 0 0 0 .865 1.5M2 13h4.45M18 5l-4.5 6M22 9l-7.75 3.25M22 15l-7-1.5" />
	</svg>
)

export default PrismLightOutlineIcon
