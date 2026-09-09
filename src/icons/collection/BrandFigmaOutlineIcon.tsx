import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandFigmaOutlineIcon = ({
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
		<path d="M12 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
		<path d="M6 6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3 3 3 0 0 1-3 3H9a3 3 0 0 1-3-3" />
		<path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3V3" />
	</svg>
)

export default BrandFigmaOutlineIcon
