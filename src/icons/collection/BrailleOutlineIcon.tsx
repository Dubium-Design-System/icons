import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrailleOutlineIcon = ({
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
		<path d="M15 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M7 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0m9-7h.01M8 12h.01M16 19h.01" />
	</svg>
)

export default BrailleOutlineIcon
