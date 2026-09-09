import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BuildingCircusOutlineIcon = ({
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
		<path d="M4 11h16m-8-4.5c0 1-5 4.5-8 4.5m8-4.5c0 1 5 4.5 8 4.5M6 11q-.5 8-2 10h4c1 0 4-4 4-9v-1m6 0q.5 8 2 10h-4c-1 0-4-4-4-9v-1" />
		<path d="M12 7V3l2 1h-2" />
	</svg>
)

export default BuildingCircusOutlineIcon
