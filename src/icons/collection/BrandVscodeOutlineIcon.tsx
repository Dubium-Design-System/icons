import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandVscodeOutlineIcon = ({
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
		<path d="M16 3v18l4-2.5v-13zM9.165 13.903 5 17.5l-2-1L7.333 12m1.735-1.802L16 3v5l-4.795 4.141" />
		<path d="M16 16.5 5 6.5l-2 1L16 21" />
	</svg>
)

export default BrandVscodeOutlineIcon
