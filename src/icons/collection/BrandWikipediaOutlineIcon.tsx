import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandWikipediaOutlineIcon = ({
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
		<path d="M3 4.984h2m3 0h2.5m4 0H17m5 0h-2m-16 0L9.455 19.5 16 4.984" />
		<path d="M9 4.984 15 19.5l6-14.516" />
	</svg>
)

export default BrandWikipediaOutlineIcon
