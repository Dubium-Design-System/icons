import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ArrowForkTripleOutlineIcon = ({
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
		<path d="M12 3v18m4-14-4-4-4 4m8 4h5v5M8 11H3v5" />
		<path d="m3 11 8.293 8.293c.453.453.707 1.067.707 1.707" />
		<path d="m21 11-8.293 8.293A2.4 2.4 0 0 0 12 21" />
	</svg>
)

export default ArrowForkTripleOutlineIcon
