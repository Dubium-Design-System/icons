import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandD3OutlineIcon = ({
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
		<path d="M3 4h1.8C8.776 4 12 7.582 12 12s-3.224 8-7.2 8H3m9-16h5.472C19.42 4 21 5.79 21 8s-1.58 4-3.528 4m0 0H15m2.472 0H15.12m2.352 0C19.42 12 21 13.79 21 16s-1.58 4-3.528 4H12" />
	</svg>
)

export default BrandD3OutlineIcon
