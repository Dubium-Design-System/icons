import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const VariableMinusOutlineIcon = ({
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
		<path d="M8 16c1.5 0 3-2 4-3.5S14.5 9 16 9" />
		<path d="M5 4C2.5 9 2.5 14 5 20M19 4c1.775 3.55 2.29 7.102 1.544 11.01M9 9h1c1 0 1 1 2.016 3.527.782 1.966.943 3 1.478 3.343" />
		<path d="M8 16c1.5 0 3-2 4-3.5S14.5 9 16 9m0 10h6" />
	</svg>
)

export default VariableMinusOutlineIcon
