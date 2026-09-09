import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const NoiseReductionOutlineIcon = ({
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
		<path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-10.99 6H10m4.01-4H14m2.01-2H16m2.01-2H18m-1.99 6H16m-1.99 2H14m4.01-4H18m-5.99 2H12" />
	</svg>
)

export default NoiseReductionOutlineIcon
