import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MathMaxMinOutlineIcon = ({
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
		<path d="M15 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0M5 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
		<path d="M3 14s.605-5.44 2.284-7.862m3.395.026c2.137 2.652 4.547 9.113 6.68 11.719m3.389.155Q19.801 16.718 21 10" />
	</svg>
)

export default MathMaxMinOutlineIcon
