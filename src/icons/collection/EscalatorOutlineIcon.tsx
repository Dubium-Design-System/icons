import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const EscalatorOutlineIcon = ({
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
		<path d="M19.5 5h-2.672a2 2 0 0 0-1.414.586L7 14H4.5a2.5 2.5 0 1 0 0 5h3.672a2 2 0 0 0 1.414-.586L18 10h1.5a2.5 2.5 0 0 0 0-5" />
	</svg>
)

export default EscalatorOutlineIcon
