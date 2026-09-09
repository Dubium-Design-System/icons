import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandBinanceOutlineIcon = ({
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
		<path d="m6 8 2 2 4-4 4 4 2-2-6-6zm0 8 2-2 4 4 3.5-3.5 2 2L12 22zm14-6 2 2-2 2-2-2zM4 10l2 2-2 2-2-2zm8 0 2 2-2 2-2-2z" />
	</svg>
)

export default BrandBinanceOutlineIcon
