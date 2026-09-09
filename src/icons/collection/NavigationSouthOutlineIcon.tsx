import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const NavigationSouthOutlineIcon = ({
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
		<path d="M10 8.25c0 .414.336.75.75.75H13a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.25a.75.75 0 0 1 .75.75M16 21l-4-8-4 8 4-2z" />
	</svg>
)

export default NavigationSouthOutlineIcon
