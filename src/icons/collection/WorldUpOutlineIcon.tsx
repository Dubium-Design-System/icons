import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WorldUpOutlineIcon = ({
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
		<path d="M20.985 12.52a9 9 0 1 0-8.451 8.463M3.6 9h16.8M3.6 15h10.9" />
		<path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 2.391 11.512M19 22v-6m3 3-3-3-3 3" />
	</svg>
)

export default WorldUpOutlineIcon
