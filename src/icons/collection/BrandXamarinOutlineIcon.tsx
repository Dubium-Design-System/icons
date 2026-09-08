import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandXamarinOutlineIcon = ({
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
		<path d="M15.958 21H8.041a2 2 0 0 1-1.732-1l-4.041-7a2 2 0 0 1 0-2l4.041-7a2 2 0 0 1 1.732-1h7.917a2 2 0 0 1 1.732 1l4.042 7a2 2 0 0 1 0 2l-4.041 7a2 2 0 0 1-1.733 1M15 16 9 8m0 8 6-8" />
	</svg>
)

export default BrandXamarinOutlineIcon
