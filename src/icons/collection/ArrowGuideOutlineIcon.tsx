import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ArrowGuideOutlineIcon = ({
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
		<path d="M3 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0m4 0h3a2 2 0 0 0 2-2V9a2 2 0 0 1 2-2h7" />
		<path d="m18 4 3 3-3 3" />
	</svg>
)

export default ArrowGuideOutlineIcon
