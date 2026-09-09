import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandBehanceOutlineIcon = ({
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
		<path d="M3 18V6h4.5a3 3 0 0 1 0 6 3 3 0 0 1 0 6zm0-6h4.5m6.5 1h7a3.5 3.5 0 0 0-7 0v2a3.5 3.5 0 0 0 6.64 1M16 6h3" />
	</svg>
)

export default BrandBehanceOutlineIcon
