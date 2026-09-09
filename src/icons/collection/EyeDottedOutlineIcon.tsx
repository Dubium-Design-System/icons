import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const EyeDottedOutlineIcon = ({
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
		<path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0m11 0h.01M3 12h.01M5 15h.01M5 9h.01M19 15h.01M12 18h.01M12 6h.01M8 17h.01M8 7h.01M16 17h.01M16 7h.01M19 9h.01" />
	</svg>
)

export default EyeDottedOutlineIcon
