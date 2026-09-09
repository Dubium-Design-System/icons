import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandWordpressOutlineIcon = ({
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
		<path d="M9.5 9h3M4 9h2.5M11 9l3 11 4-9M5.5 9 9 20l3-7m6-2c.177-.528 1-1.364 1-2.5 0-1.78-.776-2.5-1.875-2.5C16.227 6 16 6.812 16 7.429c0 1.83 2 2.058 2 3.571" />
		<path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
	</svg>
)

export default BrandWordpressOutlineIcon
