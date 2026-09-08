import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandSugarizerOutlineIcon = ({
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
		<path d="m14.277 16 3.252-3.252a1.61 1.61 0 0 0-2.277-2.276L12 13.723l-3.252-3.251a1.61 1.61 0 0 0-2.276 2.276L9.723 16l-3.251 3.252a1.61 1.61 0 1 0 2.276 2.277L12 18.277l3.252 3.252a1.61 1.61 0 1 0 2.277-2.277zM9 5a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
	</svg>
)

export default BrandSugarizerOutlineIcon
