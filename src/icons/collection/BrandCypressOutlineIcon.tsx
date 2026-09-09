import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandCypressOutlineIcon = ({
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
		<path d="M19.48 17.007A9 9 0 1 0 12 21a2.08 2.08 0 0 0 1.974-1.423L17.5 9m-4 0 2 6" />
		<path d="M10.764 9.411a3 3 0 1 0-.023 5.19" />
	</svg>
)

export default BrandCypressOutlineIcon
