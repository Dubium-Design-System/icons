import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandLastfmOutlineIcon = ({
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
		<path d="M20 8c-.83-1-1.388-1-2-1s-2 .271-2 2 1.384 2.233 3 3 2.125 1.812 2 3-1 2-3 2-3-1-3.5-2-1.585-4.78-2.497-6a5 5 0 1 0-1 7" />
	</svg>
)

export default BrandLastfmOutlineIcon
