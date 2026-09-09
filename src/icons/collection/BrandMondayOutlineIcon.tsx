import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandMondayOutlineIcon = ({
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
		<path d="M18 15.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M9.5 7a1.5 1.5 0 0 1 1.339 2.177l-4.034 7.074c-.264.447-.75.749-1.305.749a1.5 1.5 0 0 1-1.271-2.297l3.906-6.827A1.5 1.5 0 0 1 9.5 7m7 0a1.5 1.5 0 0 1 1.339 2.177l-4.034 7.074c-.264.447-.75.749-1.305.749a1.5 1.5 0 0 1-1.271-2.297l3.906-6.827A1.5 1.5 0 0 1 16.5 7" />
	</svg>
)

export default BrandMondayOutlineIcon
