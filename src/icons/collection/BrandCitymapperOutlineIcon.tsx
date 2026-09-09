import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandCitymapperOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	strokeWidth = "var(--icon-stroke-width, 1.5px)",
	...svgProps
}: IStrokeIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={strokeWidth}
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M3 11a1 1 0 1 1-1 1.013 1 1 0 0 1 1-1zm18 0a1 1 0 1 1-1 1.013 1 1 0 0 1 1-1zM8 12h8m-3-3 3 3-3 3" />
	</svg>
)

export default BrandCitymapperOutlineIcon
