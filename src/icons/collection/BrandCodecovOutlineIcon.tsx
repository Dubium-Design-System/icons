import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandCodecovOutlineIcon = ({
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
		<path d="M9.695 12.985A5.97 5.97 0 0 0 6.4 12c-1.257 0-2.436.339-3.4 1a9 9 0 1 1 18 0c-.966-.664-2.14-1-3.4-1a6 6 0 0 0-5.605 8.144" />
	</svg>
)

export default BrandCodecovOutlineIcon
