import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const EyeSparkOutlineIcon = ({
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
		<path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
		<path d="M11.669 17.994Q6.489 17.814 3 12q3.6-6 9-6t9 6m-2 10.5a4.75 4.75 0 0 1 3.5-3.5 4.75 4.75 0 0 1-3.5-3.5 4.75 4.75 0 0 1-3.5 3.5 4.75 4.75 0 0 1 3.5 3.5" />
	</svg>
)

export default EyeSparkOutlineIcon
