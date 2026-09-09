import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandStellarOutlineIcon = ({
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
		<path d="M21 6 4 13v-1c-.004-1.259.234-2.5.81-3.62C6.173 5.694 8.988 4.002 12 4a7.5 7.5 0 0 1 2.61.46M9.38 19.54a8 8 0 0 0 9.81-3.92c.576-1.12.814-2.361.81-3.62v-1L3 18" />
	</svg>
)

export default BrandStellarOutlineIcon
