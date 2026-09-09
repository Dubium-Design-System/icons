import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BoomOutlineIcon = ({
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
		<path d="M3 9.662C5 12 5 14 3 16c3 .5 4.5 1 5 4 2-3 6-4 9 0 0-3 1-4 4-4.004Q18 13.001 21 10c-3 0-5-2-5-5-2 4-5 3-7.5-1C8 7 6 9 3 9.662" />
	</svg>
)

export default BoomOutlineIcon
