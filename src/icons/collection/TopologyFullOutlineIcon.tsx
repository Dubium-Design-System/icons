import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TopologyFullOutlineIcon = ({
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
		<path d="M20 18a2 2 0 1 0-4 0 2 2 0 0 0 4 0M8 18a2 2 0 1 0-4 0 2 2 0 0 0 4 0M8 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0m12 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0M6 8v8m12 0V8M8 6h8m0 12H8M7.5 7.5l9 9m-9 0 9-9" />
	</svg>
)

export default TopologyFullOutlineIcon
