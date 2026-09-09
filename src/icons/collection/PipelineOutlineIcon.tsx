import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PipelineOutlineIcon = ({
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
		<path d="M3 4h8M4 4v5a6 6 0 0 0 6 6h3a1 1 0 0 1 1 1v4M10 4v4a1 1 0 0 0 1 1h3a6 6 0 0 1 6 6v5m-7 0h8M12 9v6" />
	</svg>
)

export default PipelineOutlineIcon
