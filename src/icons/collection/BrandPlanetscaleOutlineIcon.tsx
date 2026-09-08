import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandPlanetscaleOutlineIcon = ({
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
		<path d="M20.993 11.63a9 9 0 0 1-9.362 9.362zM12 3a9 9 0 0 1 8.166 5.211L8.211 20.166A9 9 0 0 1 12 3m0 9-6 6" />
	</svg>
)

export default BrandPlanetscaleOutlineIcon
