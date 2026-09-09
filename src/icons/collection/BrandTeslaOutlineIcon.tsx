import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandTeslaOutlineIcon = ({
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
		<path d="m12 21 3-11c2.359 0 3 0 3 1 0 0 1.18-1.745 2-3-3.077-1.464-6-1-6-1l-2 2-2-2s-2.923-.464-6 1c.82 1.255 2 3 2 3 0-1 .744-1 3-1zm8-16C14.886 3 9.114 3 4 5" />
	</svg>
)

export default BrandTeslaOutlineIcon
