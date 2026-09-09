import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TopologyStarRing2OutlineIcon = ({
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
		<path d="M14 20a2 2 0 1 0-4 0 2 2 0 0 0 4 0m0-16a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-8 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0m16 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-8 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-8 0h4m4 0h4m-6-6v4m0 4v4m-6.5-7.5 5-5m3 0 5 5m0 3-5 5m-3 0-5-5" />
	</svg>
)

export default TopologyStarRing2OutlineIcon
