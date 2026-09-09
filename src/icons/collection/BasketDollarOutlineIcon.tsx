import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BasketDollarOutlineIcon = ({
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
		<path d="m17 10-2-6m-8 6 2-6m4 16H7.244a3 3 0 0 1-2.965-2.544l-1.255-7.152A2 2 0 0 1 5.001 8H19a2 2 0 0 1 1.977 2.304" />
		<path d="M10 14a2 2 0 1 0 4 0 2 2 0 0 0-4 0m11 1h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H17m2 0v1m0-8v1" />
	</svg>
)

export default BasketDollarOutlineIcon
