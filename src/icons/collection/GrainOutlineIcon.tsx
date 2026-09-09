import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const GrainOutlineIcon = ({
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
		<path d="M3.5 9.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5-5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 10a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-5 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m10-10a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5-5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-5 15a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5-5a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
	</svg>
)

export default GrainOutlineIcon
