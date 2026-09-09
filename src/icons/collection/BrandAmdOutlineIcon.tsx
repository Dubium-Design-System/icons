import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandAmdOutlineIcon = ({
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
		<path d="M16 16V9c0-.566-.434-1-1-1H8L3 3h17c.566 0 1 .434 1 1v17z" />
		<path d="M11.293 20.707 16 16H9a1 1 0 0 1-1-1V8l-4.707 4.707a1 1 0 0 0-.293.707V20a1 1 0 0 0 1 1h6.586a1 1 0 0 0 .707-.293" />
	</svg>
)

export default BrandAmdOutlineIcon
