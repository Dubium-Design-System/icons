import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BallpenOutlineIcon = ({
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
		<path d="m14 6 7 7-4 4" />
		<path d="M5.828 18.172a2.83 2.83 0 0 0 4 0L20.414 7.586a2 2 0 0 0 0-2.829l-1.171-1.171a2 2 0 0 0-2.829 0L5.828 14.172a2.83 2.83 0 0 0 0 4M4 20l1.768-1.768" />
	</svg>
)

export default BallpenOutlineIcon
