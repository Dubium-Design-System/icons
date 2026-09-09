import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AmpersandOutlineIcon = ({
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
		<path d="M19 20 8.597 9.028a2.95 2.95 0 0 1 0-4.165 2.94 2.94 0 0 1 4.161 0 2.95 2.95 0 0 1 0 4.165l-4.68 4.687a3.685 3.685 0 0 0 0 5.207 3.675 3.675 0 0 0 5.2 0L19 13" />
	</svg>
)

export default AmpersandOutlineIcon
