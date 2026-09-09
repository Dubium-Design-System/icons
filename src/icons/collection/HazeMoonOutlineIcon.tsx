import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HazeMoonOutlineIcon = ({
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
		<path d="M3 16h18M3 20h18M8.296 16c-2.268-1.4-3.598-4.087-3.237-6.916.443-3.48 3.308-6.083 6.698-6.084v.006h.296c-1.991 1.916-2.377 5.03-.918 7.405s4.346 3.33 6.865 2.275A6.9 6.9 0 0 1 15.223 16" />
	</svg>
)

export default HazeMoonOutlineIcon
