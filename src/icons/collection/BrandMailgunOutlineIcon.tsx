import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandMailgunOutlineIcon = ({
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
		<path d="M17 12a2 2 0 1 0 4 0 9 9 0 1 0-2.987 6.697" />
		<path d="M7 12a5 5 0 1 0 10 0 5 5 0 1 0-10 0" />
		<path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
		<path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
	</svg>
)

export default BrandMailgunOutlineIcon
