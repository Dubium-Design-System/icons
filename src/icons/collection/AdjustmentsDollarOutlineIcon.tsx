import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AdjustmentsDollarOutlineIcon = ({
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
		<path d="M4 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-6v4m0 4v8m7.366-5.46a2 2 0 1 0-.216 3.097M12 4v10m0 4v2m4-13a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-3v1m0 4v1m3 5h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H17m2 0v1m0-8v1" />
	</svg>
)

export default AdjustmentsDollarOutlineIcon
