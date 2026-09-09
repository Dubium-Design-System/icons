import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AdjustmentsQuestionOutlineIcon = ({
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
		<path d="M4 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-6v4m0 4v8m7.577-5.23a2 2 0 1 0 .117 2.295M12 4v10m7 8v.01M19 19a2.003 2.003 0 0 0 .914-3.782 1.98 1.98 0 0 0-2.414.483M12 18v2m4-13a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-3v1m0 4v2" />
	</svg>
)

export default AdjustmentsQuestionOutlineIcon
