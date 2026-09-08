import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BackpackOutlineIcon = ({
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
		<path d="M5 18v-6a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3m5-12V5a2 2 0 1 1 4 0v1" />
		<path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4m-4-11h2" />
	</svg>
)

export default BackpackOutlineIcon
