import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CurlingOutlineIcon = ({
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
		<path d="M4 13a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zm0 1h16M8 5h6a2 2 0 0 1 2 2v2" />
	</svg>
)

export default CurlingOutlineIcon
