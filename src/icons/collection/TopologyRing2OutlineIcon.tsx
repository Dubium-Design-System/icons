import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TopologyRing2OutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M14 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0M7 18a2 2 0 1 0-4 0 2 2 0 0 0 4 0m14 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0M7 18h10m1-2-5-8m-2 0-5 8" />
	</svg>
)

export default TopologyRing2OutlineIcon
