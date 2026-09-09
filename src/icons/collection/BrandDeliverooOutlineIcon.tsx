import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandDeliverooOutlineIcon = ({
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
		<path d="m15 11 1-9 5 .5L20 16l-3 6-12.5-2.5-1.5-6 7-1.5-1.5-7.5 4.5-1z" />
		<path fill={color} d="M14.5 15.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-4-1a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
	</svg>
)

export default BrandDeliverooOutlineIcon
