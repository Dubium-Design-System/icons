import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandOnlyfansOutlineIcon = ({
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
		<path d="M8.5 6a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13" />
		<path d="M8.5 15a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m5.5 1c2.5 0 6.42-1.467 7-4h-6c3-1 6.44-3.533 7-6h-4c-3.03 0-3.764-.196-5 1.5" />
	</svg>
)

export default BrandOnlyfansOutlineIcon
