import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandCouchdbOutlineIcon = ({
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
		<path d="M6 12h12v-2a2 2 0 0 1 2-2 2 2 0 0 0-2-2H6a2 2 0 0 0-2 2 2 2 0 0 1 2 2zm0 3h12M6 18h12m3-7v7M3 11v7" />
	</svg>
)

export default BrandCouchdbOutlineIcon
