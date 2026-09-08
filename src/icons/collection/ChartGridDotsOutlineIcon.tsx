import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ChartGridDotsOutlineIcon = ({
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
		<path d="M16 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0m0 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m12 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-8 0h8m2 2v1m0-18v1M6 20v1m0-11V3m6 0v18m6-13v8M8 12h13m0-6h-1m-4 0H3m0 6h1m16 6h1M3 18h1m2-4v2" />
	</svg>
)

export default ChartGridDotsOutlineIcon
