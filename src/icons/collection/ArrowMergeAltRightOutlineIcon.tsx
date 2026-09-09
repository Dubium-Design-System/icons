import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ArrowMergeAltRightOutlineIcon = ({
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
		<path d="m16 7-4-4-4 4M6 21v.01m0-3v.01m1-3v.01m3-2v.01" />
		<path d="M12 3v5.394A6.74 6.74 0 0 0 15 14a6.74 6.74 0 0 1 3 5.606V21" />
	</svg>
)

export default ArrowMergeAltRightOutlineIcon
