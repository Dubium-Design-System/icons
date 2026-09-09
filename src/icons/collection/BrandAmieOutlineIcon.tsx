import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandAmieOutlineIcon = ({
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
		<path d="M3 8.5c0 1.33.472 2.55 1.257 3.5A5.5 5.5 0 0 0 12 19.743 5.5 5.5 0 0 0 19.743 12 5.5 5.5 0 0 0 12 4.257 5.5 5.5 0 0 0 3 8.5" />
		<path d="M10 9.5c0-.828.895-1.5 2-1.5s2 .672 2 1.5v5c0 .828-.895 1.5-2 1.5s-2-.672-2-1.5z" />
	</svg>
)

export default BrandAmieOutlineIcon
