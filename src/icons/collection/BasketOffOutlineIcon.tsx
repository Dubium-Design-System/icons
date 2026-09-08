import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BasketOffOutlineIcon = ({
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
		<path d="m17 10-2-6m-8 6 .75-2.252m1.001-3.002L9 4m3 4h7a2 2 0 0 1 1.977 2.304C20.535 12.82 20.221 14.742 20 16m-1.01 3.003a3 3 0 0 1-2.234.997H7.244a3 3 0 0 1-2.965-2.544l-1.255-7.152A2 2 0 0 1 5.001 8H8" />
		<path d="M12 12a2 2 0 1 0 2 2M3 3l18 18" />
	</svg>
)

export default BasketOffOutlineIcon
