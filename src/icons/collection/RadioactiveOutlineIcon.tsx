import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const RadioactiveOutlineIcon = ({
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
		<path d="m13.5 14.6 3 5.19A9 9 0 0 0 21 12h-6a3 3 0 0 1-1.5 2.6m0-5.2 3-5.19a9 9 0 0 0-9 0l3 5.19a3 3 0 0 1 3 0m-3 5.2-3 5.19A9 9 0 0 1 3 12h6a3 3 0 0 0 1.5 2.6" />
	</svg>
)

export default RadioactiveOutlineIcon
