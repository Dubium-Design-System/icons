import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Hierarchy3OutlineIcon = ({
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
		<path d="M10 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-4 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0m4 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0m8 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0M2 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0m12-7a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-9 5 2-3m2-4 2-3m2 0 2 3m2 4 2 3m-4-3-2 3m-4-3 2 3" />
	</svg>
)

export default Hierarchy3OutlineIcon
