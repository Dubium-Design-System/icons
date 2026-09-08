import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Filter2DollarOutlineIcon = ({
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
		<path d="M4 6h16M6 12h10m-7 6h4m8-3h-2m-2 6h2m0 0v1m0-1h.5a1.503 1.503 0 0 0 1.5-1.5 1.503 1.503 0 0 0-1.5-1.5h-1a1.503 1.503 0 0 1-1.5-1.5 1.503 1.503 0 0 1 1.5-1.5h.5m0-1v1" />
	</svg>
)

export default Filter2DollarOutlineIcon
