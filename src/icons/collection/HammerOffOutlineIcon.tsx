import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HammerOffOutlineIcon = ({
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
		<path d="M10.698 10.72 4.03 17.418a2.09 2.09 0 0 0 0 2.967 2.11 2.11 0 0 0 2.976 0l6.696-6.676m5.011.993 2-2a1 1 0 0 0 0-1.414l-7.586-7.586a1 1 0 0 0-1.414 0l-2 2M3 3l18 18" />
	</svg>
)

export default HammerOffOutlineIcon
