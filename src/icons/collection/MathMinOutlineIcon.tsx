import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MathMinOutlineIcon = ({
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
		<path d="M15 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
		<path d="M3 13s1-9 4-9c2.48 0 5.643 9.565 8.36 12.883m3.388.155Q19.801 15.718 21 9" />
	</svg>
)

export default MathMinOutlineIcon
