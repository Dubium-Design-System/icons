import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DirectionSignOutlineIcon = ({
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
		<path d="m3.32 12.774 7.906 7.905c.427.428 1.12.428 1.548 0l7.905-7.905a1.095 1.095 0 0 0 0-1.548l-7.905-7.905a1.095 1.095 0 0 0-1.548 0l-7.905 7.905a1.095 1.095 0 0 0 0 1.548M8 12h7.5" />
		<path d="m12 8.5 3.5 3.5-3.5 3.5" />
	</svg>
)

export default DirectionSignOutlineIcon
