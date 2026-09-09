import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const RadarOutlineIcon = ({
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
		<path d="M21 12h-8a1 1 0 1 0-1 1v8a9 9 0 0 0 9-9" />
		<path d="M16 9a5 5 0 1 0-7 7" />
		<path d="M20.486 9A9 9 0 1 0 9.004 20.495" />
	</svg>
)

export default RadarOutlineIcon
