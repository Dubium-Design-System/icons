import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ChartBarOffOutlineIcon = ({
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
		<path d="M3 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm9-5h2a1 1 0 0 1 1 1v2m0 4v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V9m6 2V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v12m-1 3h-4a1 1 0 0 1-1-1v-4M4 20h14M3 3l18 18" />
	</svg>
)

export default ChartBarOffOutlineIcon
