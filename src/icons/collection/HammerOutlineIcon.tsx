import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HammerOutlineIcon = ({
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
		<path d="m11.414 10-7.383 7.418a2.09 2.09 0 0 0 0 2.967 2.11 2.11 0 0 0 2.976 0L14.414 13m3.707 2.293 2.586-2.586a1 1 0 0 0 0-1.414l-7.586-7.586a1 1 0 0 0-1.414 0L9.121 6.293a1 1 0 0 0 0 1.414l7.586 7.586a1 1 0 0 0 1.414 0" />
	</svg>
)

export default HammerOutlineIcon
